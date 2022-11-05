import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Usuario = sequelize.define('usuarios', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_usuario: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
    contrasena: {
        type: DataTypes.STRING
    },
    f_creacion: {
        type: DataTypes.DATEONLY
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
}, {
    timestamps: false
});
