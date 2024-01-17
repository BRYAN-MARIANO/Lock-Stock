import { Dialect, Sequelize } from 'sequelize';
import 'dotenv/config';

// import UsersModel from '../models/UsersModel';
// import AplicationsUsersModel from '../models/AplicationsUsersModel';


const db = new Sequelize(
    process.env.DB_LOCK_AND_STOCK || 'default_db_lock_and_stock',
    process.env.DB_USER || 'default_user',
    process.env.DB_PASSWORD || 'default_password',
    { 
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT as Dialect | undefined,
    }
);

// // Asocia los modelos con la instancia de Sequelize
// db.Users = UsersModel;
// db.AplicationsUsersModel = AplicationsUsersModel;

// // Establece la relación entre Usuarios y Aplicaciones de Usuarios
// db.Users.hasMany(db.AplicationsUsers, { foreignKey: 'Id_User' });
// db.AplicationsUsers.belongsTo(db.Users, { foreignKey: 'Id_User' });

export default db;

