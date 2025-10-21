import sequelize from '../database/db.ts';
import { seedUsuarios } from './usuario.s.ts';
import { seedProductos } from './producto.s.ts';

export async function runSeeders() {
  try {
    await sequelize.sync({ force: false });
    await seedUsuarios();
    await seedProductos();
    console.log('🌱 Todos los seeders ejecutados correctamente');
  } catch (error) {
    console.error('❌ Error al ejecutar seeders:', error);
  } finally {
    await sequelize.close();
  }
}

runSeeders();