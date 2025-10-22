import type { Request, Response } from 'express';
import AuthService from '../service/AuthService.ts';

const AuthController = {
  async register(req: Request, res: Response) {
    try {
      const usuario = await AuthService.register(req.body);
      res.status(201).json(usuario);
    } catch (err: any) {
      res.status(400).json({ mensaje: err.message });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const result = await AuthService.login(req.body);
      res.status(200).json(result);
    } catch (err: any) {
      res.status(401).json({ mensaje: err.message });
    }
  },

  async refresh(req: Request, res: Response) {
    try {
      const { refreshToken } = req.body;
      const result = AuthService.refresh(refreshToken);
      res.status(200).json(result);
    } catch (err: any) {
      res.status(403).json({ mensaje: err.message });
    }
  },
};

export default AuthController;
