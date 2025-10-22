import Usuario from '../models/usuario.ts';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secreto';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refreshsecreto';

const AuthService = {
  async register(data: any) {
    const existe = await Usuario.findOne({ where: { email: data.email } });
    if (existe) throw new Error('El email ya está registrado');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const usuario = await Usuario.create({
      nombre: data.nombre,
      email: data.email,
      password: hashedPassword,
      rol: data.rol,
    });

    return {
      id: usuario.getDataValue('id'),
      nombre: usuario.getDataValue('nombre'),
      email: usuario.getDataValue('email'),
      rol: usuario.getDataValue('rol'),
    };
  },

  async login(data: any) {
    const usuario = await Usuario.findOne({ where: { email: data.email } });
    if (!usuario) throw new Error('Credenciales inválidas');

    const valid = await bcrypt.compare(data.password, usuario.getDataValue('password'));
    if (!valid) throw new Error('Credenciales inválidas');

    const payload = {
      id: usuario.getDataValue('id'),
      rol: usuario.getDataValue('rol'),
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '7d' });

    return {
      token,
      refreshToken,
      usuario: {
        id: usuario.getDataValue('id'),
        nombre: usuario.getDataValue('nombre'),
        email: usuario.getDataValue('email'),
        rol: usuario.getDataValue('rol'),
      },
    };
  },

  refresh(refreshToken: string) {
    try {
      const payload = jwt.verify(refreshToken, JWT_REFRESH_SECRET) as any;
      const newToken = jwt.sign({ id: payload.id, rol: payload.rol }, JWT_SECRET, { expiresIn: '15m' });
      return { token: newToken };
    } catch {
      throw new Error('Refresh token inválido');
    }
  },
};

export default AuthService;

