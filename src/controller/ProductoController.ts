import type { Request, Response } from 'express';
import ProductoService from '../service/ProductoService.ts';

const ProductoController = {
  async crear(req: Request, res: Response) {
    try {
      const producto = await ProductoService.crear(req.body);
      res.status(201).json(producto);
    } catch (err: any) {
      res.status(400).json({ mensaje: err.message });
    }
  },

  async listar(req: Request, res: Response) {
    const productos = await ProductoService.listar();
    res.status(200).json(productos);
  },

  async obtener(req: Request, res: Response) {
    try {
      const producto = await ProductoService.obtenerPorId(Number(req.params.id));
      res.status(200).json(producto);
    } catch (err: any) {
      res.status(404).json({ mensaje: err.message });
    }
  },

  async actualizar(req: Request, res: Response) {
    try {
      const producto = await ProductoService.actualizar(Number(req.params.id), req.body);
      res.status(200).json(producto);
    } catch (err: any) {
      res.status(400).json({ mensaje: err.message });
    }
  },

  async eliminar(req: Request, res: Response) {
    try {
      await ProductoService.eliminar(Number(req.params.id));
      res.status(204).send();
    } catch (err: any) {
      res.status(404).json({ mensaje: err.message });
    }
  },
};

export default ProductoController;
