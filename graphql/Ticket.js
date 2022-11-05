import { gql } from 'apollo-server-express';
import db from '../models/AllModels.js';

export const typeDefs = gql`

    type Query {
        getTicket: [tickets]
    }

    type Mutation {
        NewTicket( titulo: String, contenido: String, id_creador: Int, id_responsable: Int, id_prioridad: Int, id_proyecto: Int): tickets
    }

    type tickets {
        id_ticket: ID!
        titulo: String
        contenido: String
        id_creador: Int
        creador: usuarios
        id_responsable: Int
        responsable: usuarios
        id_prioridad: Int
        prioridad: prioridad
        f_creacion: DateTime
        activo: Int
        id_proyecto: Int
    }
`;

export const resolver = {
    Query: {
        getTicket: async () => {
            try {
                const res = await db.Tickets.findAll({
                    where: {
                        activo: 1
                    },
                    order: [['id_ticket', 'DESC']],
                });
                return res;
            } catch (error) {
                console.log(error);
                return error;
            }
        }
    },
    Mutation: {
        NewTicket: async (_, arg) => {
            try {
                const { titulo, contenido, id_creador, id_responsable, id_prioridad, id_proyecto } = arg;
                const res = await db.Tickets.create({
                    titulo: titulo,
                    contenido: contenido,
                    id_creador: id_creador,
                    id_responsable: id_responsable,
                    id_prioridad: id_prioridad,
                    id_proyecto: id_proyecto,
                });
                return res;
            } catch (error) {
                console.log(error);
                return error;
            }
        }
    },
    tickets: {
        creador: async (root) => {
            return db.Usuario.findByPk(root.id_creador).then(res => res)
        },
        responsable: async (root) => {
            return db.Usuario.findByPk(root.id_responsable).then(res => res)
        },
        prioridad: async (root) => {
            return db.Prioridad.findByPk(root.id_prioridad).then(res => res)
        },
    }
};
