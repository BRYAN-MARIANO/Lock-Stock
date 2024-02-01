
// Importa Model y DataTypes de 'sequelize'
import { Model, DataTypes } from 'sequelize';
import db from '../database/db';
import UsersModel from './UsersModel'; // Asegúrate de importar UsersModel correctamente

// Definición del modelo LoginAttemptsModel
class LoginAttemptsModel extends Model {
  // Puedes definir métodos específicos del modelo aquí si es necesario
}

LoginAttemptsModel.init({
  Id_AttempLogin: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
  Location: { type: DataTypes.STRING(50), allowNull: false },
  Device: { type: DataTypes.STRING(50), allowNull: false },
  Sistem_Operative: { type: DataTypes.STRING(20) },
  DateLoginError: { type: DataTypes.DATE, allowNull: false },
  Ip_Direction: { type: DataTypes.INTEGER },
  Id_User: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users', // Nombre de la tabla
      key: 'Id_User', // Llave en la tabla Users a la que referencia
    }
  },
}, {
  sequelize: db,
  tableName: 'Login_Attemps',
  timestamps: false,
});

// Establece la relación con UsersModel
LoginAttemptsModel.belongsTo(UsersModel, { foreignKey: 'Id_User' });
UsersModel.hasMany(LoginAttemptsModel, { foreignKey: 'Id_User' });

export default LoginAttemptsModel;