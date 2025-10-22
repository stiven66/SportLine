// src/routes/productos.routes.ts
import { Router } from 'express';
import { verifyToken } from '../middleware/verifyToken.ts';
import { checkRole } from '../middleware/checkRole.ts';
import ProductoController from '../controller/ProductoController.ts';

const router = Router();

// Solo admin puede crear productos
router.post('/crear', verifyToken, checkRole(['admin']), ProductoController.crearProducto);

// Admin y vendedor pueden ver productos
router.get('/', verifyToken, checkRole(['admin', 'vendedor']), ProductoController.listarProductos);

export default router;
