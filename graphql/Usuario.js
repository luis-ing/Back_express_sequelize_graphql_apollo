import { gql } from 'apollo-server-express';
import db from '../models/AllModels.js';

export const typeDefs = gql`

    type Query {
        getUsuarios: [usuarios]
    }

    type Mutation {
        NewUsuario(nombre_usuario: String, email: String, contrasena: String): usuarios

        UpdateUsuario(id_user: Int, nombre_usuario: String, email: String, contrasena: String): usuarios

        DeleteUsuario(id_user: Int): usuarios
    }

    type usuarios {
        id_user: ID!
        nombre_usuario: String
        email: String
        contrasena: String
        f_creacion: DateTime
        activo: Int
    }
`;

export const resolver = {
    Query: {
        getUsuarios: async () => {
            try {
                const res = await db.Usuario.findAll();
                return res;
            } catch (error) {
                console.log(error);
                return error;
            }
        }
    },
    Mutation: {
        NewUsuario: async (_, arg) => {
            try {
                const { nombre_usuario, email, contrasena } = arg;
                const res = await db.Usuario.create({
                    nombre_usuario: nombre_usuario,
                    email: email,
                    contrasena: contrasena,
                });
                return res;
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        UpdateUsuario: async (_, arg) => {
            try {
                const { id_user, nombre_usuario, email, contrasena } = arg;
                await db.Usuario.update({
                    nombre_usuario: nombre_usuario,
                    email: email,
                    contrasena: contrasena,
                }, {
                    where: {
                        id_user: id_user
                    }
                })
                const respond = await db.Usuario.findByPk(id_user);
                return respond;
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        DeleteUsuario: async (_, arg) => {
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
