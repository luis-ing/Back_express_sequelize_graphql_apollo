import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Contenido_columnas } from "./Contenido_columnas.js";
import { Proyecto } from "./Proyecto.js";

export const Tablero_metodologia = sequelize.define('tablero_metodologia', {
    id_tablero_metodologia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    f_creacion: {
        type: DataTypes.DATEONLY,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    timestamps: false
});

// Tablero metodologia
Tablero_metodologia.hasMany(Contenido_columnas, {
    foreignKey: 'id_tablero_metodologia',
    sourceKey: 'id_tablero_metodologia'
});

Contenido_columnas.belongsTo(Tablero_metodologia, {
    foreignKey: 'id_tablero_metodologia',
    targetId: 'id_tablero_metodologia'
});

// Tablero Proyecto
Tablero_metodologia.hasOne(Proyecto, {
    foreignKey: 'id_tablero_metodologia',
    sourceKey: 'id_tablero_metodologia'
});

Proyecto.belongsTo(Tablero_metodologia, {
    foreignKey: 'id_tablero_metodologia',
    targetId: 'id_tablero_metodologia'
});