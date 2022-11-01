import { gql } from 'apollo-server-express';
// import { Contenido_columnas } from '../models/Contenido_columnas.js';
import db from '../models/AllModels.js';

export const typeDefs = gql`
    
    type Query {
        getContenidoColumna(id_tablero_metodologia: Int!,activo: Int): [contenido_columnas]
    }

    type Mutation {
        NewContenidoColumna(nombre_columna: String,
        activo: Int,
        orden: Int,
        id_tablero_metodologia: Int): contenido_columnas

        UpdateContenidoColumna(id_contenido_columnas: Int!, nombre_columna: String,
        activo: Int,
        orden: Int): contenido_columnas
    }

    type contenido_columnas {
        id_contenido_columnas: ID!
        nombre_columna: String
        activo: Int
        orden: Int
        id_tablero_metodologia: Int
    }
`;

export const resolver = {
    Query: {
        getContenidoColumna: async (_, arg) => {
            try {
                const res = await db.Contenido_columnas.findAll({
                    where: {
                        id_tablero_metodologia: arg.id_tablero_metodologia,
                        activo: arg.activo,
                    },
                    order: [['orden', 'ASC']],
                });
                return res;
            } catch (error) {
                console.log(error);
                return error;
            }
        }
    },
    Mutation: {
        NewContenidoColumna: async (_, arg) => {
            try {
                const { nombre_columna, orden, id_tablero_metodologia } = arg;
                const res = await db.Contenido_columnas.create({
                    nombre_columna: nombre_columna,
                    orden: orden,
                    id_tablero_metodologia: id_tablero_metodologia,
                });
                return res;
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        UpdateContenidoColumna: async (_, { id_contenido_columnas, nombre_columna, orden, id_tablero_metodologia }) => {
            try {
                const res = await db.Contenido_columnas.findByPk(id_contenido_columnas)
                res.nombre_columna = nombre_columna;
                res.orden = orden;
                res.id_tablero_metodologia = id_tablero_metodologia;
                await res.save();
                const respond = await db.Contenido_columnas.findByPk(id_contenido_columnas);
                return respond;
            } catch (error) {
                console.log(error);
                return error;
            }
        }
    },
};
