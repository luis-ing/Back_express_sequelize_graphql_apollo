import { gql } from 'apollo-server-express';
// import { Proyecto } from '../models/Proyecto.js';
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
};
