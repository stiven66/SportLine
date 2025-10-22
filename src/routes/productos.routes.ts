// src/routes/productos.routes.ts
import { Router } from 'express';
import { verifyToken } from '../middleware/verifyToken.ts';
import { checkRole } from '../middleware/checkRole.ts';
import ProductoController from '../controller/ProductoController.ts';

const router = Router();

// Crear producto (solo admin)
router.post('/', verifyToken, checkRole(['admin']), ProductoController.crear);

// Listar productos (admin y vendedor)
router.get('/', verifyToken, checkRole(['admin', 'vendedor']), ProductoController.listar);

// Obtener producto por ID
router.get('/:id', verifyToken, checkRole(['admin', 'vendedor']), ProductoController.obtener);

// Actualizar producto (solo admin)
router.put('/:id', verifyToken, checkRole(['admin']), ProductoController.actualizar);

// Eliminar producto (solo admin)
router.delete('/:id', verifyToken, checkRole(['admin']), ProductoController.eliminar);

export default router;
