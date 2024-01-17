import { DataTypes } from 'sequelize';
import db from '../database/db';

const AdminModel = db.define('Admins', {
  Id_Admin: {
    type: DataTypes.UUID(),
    primaryKey: true,
    allowNull: false
  },
  Name_Admin: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  Password_Admin: {
    type: DataTypes.UUID(),
    allowNull: false
  },
  Notifications_Admin: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'Admins',
  timestamps: false
});

export default AdminModel;
