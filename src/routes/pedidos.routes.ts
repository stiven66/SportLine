import { Router } from 'express';
import PedidoController from '../controller/PedidoController.ts';
import PedidoControllerCon from '../controller/PedidoController.ts';

const router = Router();
/**
 * @swagger
 * /api/pedidos:
 *   post:
 *     summary: Registrar un nuevo pedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idCliente:
 *                 type: integer
 *                 example: 1
 *               productos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idProducto:
 *                       type: integer
 *                       example: 2
 *                     cantidad:
 *                       type: integer
 *                       example: 3
 *     responses:
 *       201:
 *         description: Pedido registrado correctamente
 */
router.post('/', PedidoController.registrar);
/**
 * @swagger
 * /api/pedidos:
 *   get:
 *     summary: Listar todos los pedidos
 *     tags: [Pedidos]
 */
router.get('/', PedidoControllerCon.listarTodos);
/**
 * @swagger
 * /api/pedidos/cliente/{id}:
 *   get:
 *     summary: Consultar pedidos por cliente
 *     tags: [Pedidos]
 */
router.get('/cliente/:id', PedidoControllerCon.consultarPorCliente);
/**
 * @swagger
 * /api/pedidos/producto/{id}:
 *   get:
 *     summary: Consultar pedidos por producto
 *     tags: [Pedidos]
 */
router.get('/producto/:id', PedidoControllerCon.consultarPorProducto);

export default router;