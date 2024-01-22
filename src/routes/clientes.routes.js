
import {Router} from 'express';
import { getClientes, getCliente, deleteCliente, addCliente, updateCliente } from '../controllers/clientes.controller.js';
import { validacion } from '../validators/clientes.validator.js';

const router = Router();

router.get('/clientes',getClientes);
router.get('/clientes/:id',getCliente);
router.post('/clientes',validacion, addCliente);
// router.put('/clientes/:id', updateCliente);
router.patch('/clientes/:id',validacion, updateCliente);
router.delete('/clientes/:id', deleteCliente);
export default router; //Exportamos