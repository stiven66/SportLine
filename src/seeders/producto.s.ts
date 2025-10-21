import Producto from '../models/productos.ts';

export async function seedProductos() {
  const existing = await Producto.findOne({ where: { codigo: 'PROD001' } });
  const existing2 = await Producto.findOne({ where: { codigo: 'PROD002' } });
  const existing3 = await Producto.findOne({ where: { codigo: 'PROD003' } });
  if (existing && existing2 && existing3) {
    console.log('⚠️ Productos ya existen, se omite creación');
    return;
  }

  await Producto.bulkCreate([
    {
      nombre: 'Balón de fútbol',
      codigo: 'PROD001',
      precio: 49.99,
      stock: 100,
    },
    {
      nombre: 'Guantes de portero',
      codigo: 'PROD002',
      precio: 29.99,
      stock: 50,
    },
    {
      nombre: 'Camiseta oficial',
      codigo: 'PROD003',
      precio: 39.99,
      stock: 75,
    },
  ]);

  console.log('✅ Productos de ejemplo creados');
}