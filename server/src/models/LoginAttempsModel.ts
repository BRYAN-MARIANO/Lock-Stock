import { DataTypes } from 'sequelize';
import db from '../database/db';
import UsersModel from './UsersModel';

const LoginAttempsModels = db.define('Login_Attemps', {
  Id_AttempLogin: {
    type: DataTypes.UUID(),
    primaryKey: true,
    allowNull: false
  },
  Location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Device: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Sistem_Operative: {
    type: DataTypes.STRING(10)
  },
  DateLoginError: {
    type: DataTypes.DATE,
    allowNull: false
  },
    Ip_Direction: {
      type: DataTypes.INTEGER
  },
    Id_User: {
      type: DataTypes.UUID(),
      allowNull: false,
      references: {
        model: UsersModel,  
        key: 'Id_User'      
      }, 
    },
   }, {
  tableName: 'Login_Attemps',
  timestamps: false
});

LoginAttempsModels.belongsTo(UsersModel, { foreignKey: 'Id_User'})

export default LoginAttempsModels;
