import { gql } from 'apollo-server-express';
import db from '../models/AllModels.js';

export const typeDefs = gql`

    extend type Query {
        getProyecto(activo: Int): [proyectos]
    }

    type proyectos {
        id_proyecto: ID!
        nombre: String
        activo: Int
        f_creacion: DateTime
        id_tablero_metodologia: Int
        tablero_metodologia: tablero_metodologia
    }
`;

export const resolver = {
    Query: {
        getProyecto: async (_, arg) => {
            try {
                const res = await db.Proyecto.findAll({
                    where: {
                        activo: arg.activo
                    }
                });
                return res;
            } catch (error) {
                console.log(error);
                return error;
            }
        }
    },

    proyectos: {
        tablero_metodologia: async (root) => {
            return db.Tablero_metodologia.findByPk(root.id_tablero_metodologia).then(res => res)
        }
    }
};
