import Usuario from '../models/usuario.ts';
import bcrypt from 'bcrypt';

export async function seedUsuarios() {
  const existingAdmin = await Usuario.findOne({ where: { email: 'admin@sportsline.com' } });
  if (existingAdmin) {
    console.log('⚠️ Usuario admin ya existe, se omite creación');
    return;
  }

  const hashedPassword = await bcrypt.hash('admin123', 10);

  await Usuario.create({
    nombre: 'Admin',
    email: 'admin@sportsline.com',
    password: hashedPassword,
    rol: 'admin',
  });

  console.log('✅ Usuario admin creado');
}