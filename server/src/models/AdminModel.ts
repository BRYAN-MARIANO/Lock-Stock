import { DataTypes } from 'sequelize';
import db from '../database/db';

const AdminModel = db.define('Admins', {
  Id_Admin: {
    type: DataTypes.UUID(),
    primaryKey: true,
    allowNull: false
  },
  Name_Admin: {
    type: DataTypes.STRING(),
    allowNull: false
  },
  Password_Admin: {
    type: DataTypes.STRING(),
    allowNull: false
  },
}, {
  tableName: 'Admins',
  timestamps: false
});

export default AdminModel;
