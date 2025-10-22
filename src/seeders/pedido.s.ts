import Pedido from '../models/pedido.ts';
import Cliente from '../models/clientes.ts';
import Producto from '../models/productos.ts';

export async function seedPedidos() {
  const cliente = await Cliente.findOne({ where: { email: 'cliente1@sportsline.com' } });
  const producto = await Producto.findOne({ where: { codigo: 'PROD001' } });

  if (!cliente || !producto) {
    console.log('⚠️ Cliente o producto no encontrado, se omite creación de pedidos');
    return;
  }

  const pedidoExistente = await Pedido.findOne({
    where: {
      cliente_id: cliente.getDataValue('id'),
      producto_id: producto.getDataValue('id'),
    },
  });

  if (pedidoExistente) {
    console.log('⚠️ Pedido ya existe, no se duplica');
    return;
  }

  await Pedido.create({
    cliente_id: cliente.getDataValue('id'),
    producto_id: producto.getDataValue('id'),
    cantidad: 2,
    fecha: new Date(),
  });

  console.log('✅ Pedido creado exitosamente');
}

