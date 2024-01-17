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
    Date_Last_Conexion_Device: {
      type: DataTypes.DATE,
      allowNull: false
  },
   Status_Device: {
      type: DataTypes.BOOLEAN,
      allowNull: false
  },
    Ip_Direction_Device: {
      type: DataTypes.INTEGER
  },
    Sistem_Operative_Device: {
      type: DataTypes.STRING(10)
    },
    Id_User: {
      type: DataTypes.UUID(),
      allowNull: false,
      references: {
        model: UsersModel,  // Usa el modelo de Usuarios
        key: 'Id_User'      // Columna en la tabla de Usuarios
      }, 
    },
   }, {
  tableName: 'Devices_User',
  timestamps: false
});

DevicesUserModel.belongsTo(DevicesUserModel, { foreignKey: 'Id_Users' });

export default DevicesUserModel;
