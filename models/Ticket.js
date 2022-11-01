import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Tickets = sequelize.define('tickets', {
    id_ticket: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
    },
    contenido: {
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
