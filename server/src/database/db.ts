import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config()


const db = new Sequelize(
    process.env.DB_LOCK_AND_STOCK || 'defult_lock_and_stock',
    process.env.DB_USERS || 'usuario',
    process.env.DB_PASSWORD || 'password',
    { 
        host: process.env.DB_HOST || 'host',
        dialect: 'mysql',
    }
);

export default db;

