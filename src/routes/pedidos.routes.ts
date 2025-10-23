import { Router } from 'express';
import PedidoController from '../controller/PedidoController.ts';
import PedidoControllerCon from '../controller/PedidoController.ts';

const router = Router();

router.post('/', PedidoController.registrar);
router.get('/', PedidoControllerCon.listarTodos);
router.get('/cliente/:id', PedidoControllerCon.consultarPorCliente);
router.get('/producto/:id', PedidoControllerCon.consultarPorProducto);

export default router;