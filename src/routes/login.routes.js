import {Router} from 'express';
import conexion from '../mySql_conector.js';

const router = Router();

//Responder a los endpoint. Representa una acción de la API.


router.get('/login', async(req, res)=>{
  //  res.send('Respuesta servidor con express en la ruta login desde el fichero login.routes.js');
    const [result] = await conexion.query('SELECT 1 + 1 as Result');
    res.json(result[0]);
})


export default router; //Exportamos