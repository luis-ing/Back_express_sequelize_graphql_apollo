import { gql } from 'apollo-server-express';
import db from '../models/AllModels.js';

export const typeDefs = gql`

    type Query {
        getTicket: [tickets]
    }

    type tickets {
        id_ticket: ID!
        titulo: String
        contenido: String
        f_creacion: DateTime
        activo: Int
    }
`;

export const resolver = {
    Query: {
        getTicket: async () => {
            try {
                const res = await db.Tickets.findAll();
                return res;
            } catch (error) {
                console.log(error);
                return error;
            }
        }
    },
};
