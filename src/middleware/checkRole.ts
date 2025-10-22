// src/middlewares/checkRole.ts
import type { Request, Response, NextFunction } from 'express';

// Extendemos el tipo Request para incluir 'user'
interface AuthenticatedRequest extends Request {
  user?: any;
}

export function checkRole(roles: ('admin' | 'vendedor')[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user || !roles.includes(user.rol)) {
      return res.status(403).json({ mensaje: 'Acceso denegado por rol' });
    }

    next();
  };
}
