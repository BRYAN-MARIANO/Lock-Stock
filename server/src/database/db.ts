import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config()


const db = new Sequelize(
    process.env.DB_LOCK_AND_STOCK || 'holamundo',
    process.env.DB_USERS || 'hola',
    process.env.DB_PASSWORD || 'mundo',
    { 
        host: process.env.DB_HOST || 'adios',
        dialect: 'mysql',
    }
);

export default db;

