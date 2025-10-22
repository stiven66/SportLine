import Producto from '../models/productos.ts';

const ProductoService = {
  async crear(data: any) {
    const existe = await Producto.findOne({ where: { codigo: data.codigo } });
    if (existe) throw new Error('El código ya existe');

    return await Producto.create(data);
  },

  async listar() {
    return await Producto.findAll();
  },

  async obtenerPorId(id: number) {
    const producto = await Producto.findByPk(id);
    if (!producto) throw new Error('Producto no encontrado');
    return producto;
  },

  async actualizar(id: number, data: any) {
    const producto = await Producto.findByPk(id);
    if (!producto) throw new Error('Producto no encontrado');

    if (data.codigo && data.codigo !== producto.getDataValue('codigo')) {
      const existe = await Producto.findOne({ where: { codigo: data.codigo } });
      if (existe) throw new Error('El nuevo código ya existe');
    }

    await producto.update(data);
    return producto;
  },

  async eliminar(id: number) {
    const producto = await Producto.findByPk(id);
    if (!producto) throw new Error('Producto no encontrado');
    await producto.destroy();
  },
};

export default ProductoService;
