import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db.ts';

class Cliente extends Model {}

Cliente.init({
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
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Cliente',
  tableName: 'clientes',
  timestamps: true,
});

export default Cliente;
