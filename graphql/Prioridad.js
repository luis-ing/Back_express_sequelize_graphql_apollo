import { gql } from 'apollo-server-express';
import db from '../models/AllModels.js';

export const typeDefs = gql`

    type Query {
        getPrioridad: [prioridad]
    }

    type Mutation {
        NewPrioridad(titulo: String): prioridad

        UpdatePrioridad(id_prioridad: Int, titulo: String): prioridad

        DeletePrioridad(id_prioridad: Int): prioridad
    }

    type prioridad {
        id_prioridad: ID!
        titulo: String
        activo: Int
    }
`;

export const resolver = {
    Query: {
        getPrioridad: async () => {
            try {
                const res = await db.Prioridad.findAll();
                return res;
            } catch (error) {
                console.log(error);
                return error;
            }
        }
    },
    Mutation: {
        NewPrioridad: async (_, arg) => {
            try {
                const { titulo } = arg;
                const res = await db.Prioridad.create({
                    titulo: titulo,
                    activo: 1,
                });
                return res;
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        UpdatePrioridad: async (_, arg) => {
            try {
                const { id_prioridad, titulo } = arg;
                await db.Prioridad.update({
                    titulo: titulo,
                }, {
                    where: {
                        id_prioridad: id_prioridad
                    }
                })
                const respond = await db.Prioridad.findByPk(id_prioridad);
                return respond;
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        DeletePrioridad: async (_, arg) => {
            try {
                const { id_user } = arg;
                const res = await db.Usuario.findByPk(id_user)
                res.activo = 0;
                await res.save();
                const respond = await db.Usuario.findByPk(id_user);
                return respond;
            } catch (error) {
                console.log(error);
                return error;
            }
        }
    }
};
