import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Usuario } from "./Usuario.js";
import { Prioridad } from "./Prioridad.js";

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
    timestamps: false,
    tableName: 'tickets',
});

// Usuario tiene muchos Tickets
Usuario.hasMany(Tickets, {
    foreignKey: 'id_creador',
    sourceKey: 'id_user'
});

Tickets.belongsTo(Usuario, {
    foreignKey: 'id_creador',
    targetId: 'id_user'
});

// Usuario tiene muchos Tickets
Usuario.hasMany(Tickets, {
    foreignKey: 'id_responsable',
    sourceKey: 'id_user'
});

Tickets.belongsTo(Usuario, {
    foreignKey: 'id_responsable',
    targetId: 'id_user'
});

// Usuario tiene una Tickets
Prioridad.hasMany(Tickets, {
    foreignKey: 'id_prioridad',
    sourceKey: 'id_prioridad'
});

Tickets.belongsTo(Prioridad, {
    foreignKey: 'id_prioridad',
    targetId: 'id_prioridad'
});