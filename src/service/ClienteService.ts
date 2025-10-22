import Cliente from '../models/clientes.ts';

const ClienteService = {
  async crear(data: any) {
    const existe = await Cliente.findOne({ where: { email: data.email } });
    if (existe) throw new Error('El email ya está registrado');

    return await Cliente.create(data);
  },

  async listar() {
    return await Cliente.findAll();
  },

  async obtenerPorId(id: number) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) throw new Error('Cliente no encontrado');
    return cliente;
  },

  async actualizar(id: number, data: any) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) throw new Error('Cliente no encontrado');

    if (data.email && data.email !== cliente.getDataValue('email')) {
      const existe = await Cliente.findOne({ where: { email: data.email } });
      if (existe) throw new Error('El nuevo email ya está registrado');
    }

    await cliente.update(data);
    return cliente;
  },

  async eliminar(id: number) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) throw new Error('Cliente no encontrado');
    await cliente.destroy();
  },
};

export default ClienteService;
