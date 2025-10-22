// src/controllers/ClienteController.ts
import type { Request, Response } from 'express';
import ClienteService from '../service/ClienteService.ts';

const ClienteController = {
  async crear(req: Request, res: Response) {
    try {
      const cliente = await ClienteService.crear(req.body);
      res.status(201).json(cliente);
    } catch (err: any) {
      res.status(400).json({ mensaje: err.message });
    }
  },

  async listar(req: Request, res: Response) {
    const clientes = await ClienteService.listar();
    res.status(200).json(clientes);
  },

  async obtener(req: Request, res: Response) {
    try {
      const cliente = await ClienteService.obtenerPorId(Number(req.params.id));
      res.status(200).json(cliente);
    } catch (err: any) {
      res.status(404).json({ mensaje: err.message });
    }
  },

  async actualizar(req: Request, res: Response) {
    try {
      const cliente = await ClienteService.actualizar(Number(req.params.id), req.body);
      res.status(200).json(cliente);
    } catch (err: any) {
      res.status(400).json({ mensaje: err.message });
    }
  },

  async eliminar(req: Request, res: Response) {
    try {
      await ClienteService.eliminar(Number(req.params.id));
      res.status(204).send();
    } catch (err: any) {
      res.status(404).json({ mensaje: err.message });
    }
  },
};

export default ClienteController;
