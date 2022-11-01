import Sequelize from 'sequelize';

export const sequelize = new Sequelize('organizador_bd', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});