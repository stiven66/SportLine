import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db.ts';

class Usuario extends Model {}

Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM('admin', 'vendedor'),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Usuario',
  tableName: 'usuarios',
  timestamps: true,
});

export default Usuario;
