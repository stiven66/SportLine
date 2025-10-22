// src/dao/UsuarioDAO.ts
import Usuario from '../models/usuario.ts';

const UsuarioDAO = {
  async encontrarPorEmail(email: string) {
    return await Usuario.findOne({ where: { email } });
  },

  async crearUsuario(data: {
    nombre: string;
    email: string;
    password: string;
    rol: 'admin' | 'vendedor';
  }) {
    return await Usuario.create(data);
  },
};

export default UsuarioDAO;
