import sequelize from '../database/db.ts';
import { seedUsuarios } from './usuario.s.ts';
import { seedProductos } from './producto.s.ts';
import { seedClientes } from './cliente.s.ts';
import { seedPedidos } from './pedido.s.ts';

export async function runSeeders() {
  try {
    await sequelize.sync({ force: false });
    await seedUsuarios();
    await seedProductos();
    await seedClientes();
    await seedPedidos();
    console.log('🌱 Todos los seeders ejecutados correctamente');
  } catch (error) {
    console.error('❌ Error al ejecutar seeders:', error);
  } finally {
    await sequelize.close();
  }
}

