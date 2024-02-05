import { DataTypes } from 'sequelize';
import db from '../database/db';
import UsersModel from './UsersModel';

const AplicationsUsersModel = db.define('Aplications_User', {
  Id_Aplications: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4 // Autogenerar UUID
  },
  Name_Aplication: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  Email_Aplication: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  Category_Aplication: {
    type: DataTypes.STRING(15),
    // Considera si este campo debe ser allowNull: true
  },
  Password_Aplication: {
    type: DataTypes.UUID,
    allowNull: false,
    // Revisa si esto debe ser defaultValue: DataTypes.UUIDV4 o manejarse de otra manera
  },
  Id_User: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: UsersModel,
      key: 'Id_User'
    }, 
    // No se autogenera si es una clave foránea, asegúrate de proporcionarlo al crear el registro
  },
}, {
  tableName: 'Aplications_User',
  timestamps: false
});

AplicationsUsersModel.belongsTo(UsersModel, { foreignKey: 'Id_User' });

export default AplicationsUsersModel;
