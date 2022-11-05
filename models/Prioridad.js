import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Prioridad = sequelize.define('prioridad', {
    id_prioridad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
}, {
    timestamps: false,
    tableName: 'prioridad',
});
