import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Contenido_columnas = sequelize.define('contenido_columnas', {
    id_contenido_columnas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_columna: {
        type: DataTypes.STRING,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    orden: {
        type: DataTypes.INTEGER,
    },
}, {
    timestamps: false
});