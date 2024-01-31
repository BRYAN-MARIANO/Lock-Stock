import { DataTypes } from 'sequelize';
import db from '../database/db';
import UsersModel from './UsersModel';

const DevicesUserModel = db.define('Devices_User', {
  Id_Devide: {
    type: DataTypes.UUID(),
    primaryKey: true,
    allowNull: false
  },
  Name_Device: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Date_Register_Device: {
   type: DataTypes.DATE,
   allowNull: false
 },
  Sistem_Operative_Device: {
    type: DataTypes.STRING(30)
  },
    Ip_Direction_Device: {
      type: DataTypes.STRING(30)
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
  tableName: 'Devices_User',
  timestamps: false
});

DevicesUserModel.belongsTo(UsersModel, { foreignKey: 'Id_Users' });

export default DevicesUserModel;
