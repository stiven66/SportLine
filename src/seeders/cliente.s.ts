import Cliente from '../models/clientes.ts';

export async function seedClientes() {
  const existing = await Cliente.findOne({ where: { email: 'cliente1@sportsline.com' } });
  const existing2 = await Cliente.findOne({where: { email: 'cliente2@sportsline.com'}});
  if (existing && existing2) {
    console.log('⚠️ Clientes ya existen, se omite creación');
    return;
  }

  await Cliente.bulkCreate([
    {
      nombre: 'Juan Pérez',
      email: 'cliente1@sportsline.com',
      telefono: '3001234567',
    },
    {
      nombre: 'Laura Gómez',
      email: 'cliente2@sportsline.com',
      telefono: '3019876543',
    },
  ]);

  console.log('✅ Clientes de ejemplo creados');
}