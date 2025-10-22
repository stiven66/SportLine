import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db.ts';
import Cliente from './clientes.ts';
import Producto from './productos.ts';

class Pedido extends Model {}

Pedido.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Pedido',
  tableName: 'pedidos',
  timestamps: false,
});

// Relaciones
Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Pedido.belongsTo(Producto, { foreignKey: 'producto_id' });

Cliente.hasMany(Pedido, { foreignKey: 'cliente_id' });
Producto.hasMany(Pedido, { foreignKey: 'producto_id' });

export default Pedido;
