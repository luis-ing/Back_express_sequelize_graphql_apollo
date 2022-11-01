import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Tickets } from "./Ticket.js";

export const Proyecto = sequelize.define('proyectos', {
    id_proyecto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    f_creacion: {
        type: DataTypes.DATEONLY,
    },
}, {
    timestamps: false
});

// Tablero metodologia
Proyecto.hasMany(Tickets, {
    foreignKey: 'id_proyecto',
    sourceKey: 'id_proyecto'
});

Tickets.belongsTo(Proyecto, {
    foreignKey: 'id_proyecto',
    targetId: 'id_proyecto'
});
