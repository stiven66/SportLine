import type { Request, Response } from 'express';
import PedidoService from '../service/PedidoService.ts';
import PedidoServiceCon from '../service/PedidoService.ts';

const PedidoController = {
  async registrar(req: Request, res: Response) {
    try {
      const { idCliente, productos } = req.body;
      const resultado = await PedidoService.registrarPedido(idCliente, productos);
      res.status(201).json(resultado);
    } catch (err: any) {
      res.status(400).json({ mensaje: err.message });
    }
  },
};

const PedidoControllerCon = {
  async listarTodos(req: Request, res: Response) {
    const pedidos = await PedidoServiceCon.listarTodos();
    res.status(200).json(pedidos);
  },

  async consultarPorCliente(req: Request, res: Response) {
    try {
      const pedidos = await PedidoServiceCon.consultarPorCliente(Number(req.params.id));
      res.status(200).json(pedidos);
    } catch (err: any) {
      res.status(400).json({ mensaje: err.message });
    }
  },

  async consultarPorProducto(req: Request, res: Response) {
    try {
      const pedidos = await PedidoServiceCon.consultarPorProducto(Number(req.params.id));
      res.status(200).json(pedidos);
    } catch (err: any) {
      res.status(400).json({ mensaje: err.message });
    }
  },
};

export default {PedidoController , PedidoControllerCon};