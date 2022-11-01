import { gql } from 'apollo-server-express';
// import { Tablero_metodologia } from '../models/Tablero_metodologia.js';
import db from '../models/AllModels.js';

export const typeDefs = gql`

    type Query {
        getTableroMetodologia(activo: Int): [tablero_metodologia]
    }

    type tablero_metodologia {
        id_tablero_metodologia: ID!
        nombre: String
        f_creacion: DateTime
        activo: Int
    }
`;

export const resolver = {
    Query: {
        getTableroMetodologia: async (_, arg) => {
            try {
                const res = await db.Tablero_metodologia.findAll({
                    where: {
                        activo: arg.activo,
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
