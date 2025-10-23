import Pedido from '../models/pedido.ts';
import Producto from '../models/productos.ts';

const PedidoService = {
  async registrarPedido(idCliente: number, productos: { idProducto: number; cantidad: number }[]) {
    for (const item of productos) {
      const producto = await Producto.findByPk(item.idProducto);
      if (!producto) throw new Error(`Producto ${item.idProducto} no existe`);

      const stock = producto.getDataValue('stock');
      if (stock < item.cantidad) {
        throw new Error(`Stock insuficiente para el producto ${producto.getDataValue('nombre')}`);
      }

      // Registrar pedido
      await Pedido.create({
        idCliente,
        idProducto: item.idProducto,
        cantidad: item.cantidad,
      });

      // Reducir inventario
      await producto.update({ stock: stock - item.cantidad });
    }

    return { mensaje: 'Pedido registrado correctamente' };
  },
};


const PedidoServiceCon = {
  async listarTodos() {
    return await Pedido.findAll();
  },

  async consultarPorCliente(idCliente: number) {
    return await Pedido.findAll({ where: { idCliente } });
  },

  async consultarPorProducto(idProducto: number) {
    return await Pedido.findAll({ where: { idProducto } });
  },
};

export default {PedidoService , PedidoServiceCon}; 