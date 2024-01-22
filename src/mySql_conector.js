'use strict'

//Importar el paquete mysql para realizar la conexión

import {createPool} from 'mysql2/promise'; //Para trabajar con promesas
import { DB_HOST,DB_DATABASE,DB_PORT,DB_USER,DB_PASSWORD } from './config.js';


const conexion = createPool({ //Establecer las caracteristicas de la conexión
    'host':DB_HOST,
    'user':DB_USER,
    'password':DB_PASSWORD,
    'database':DB_DATABASE,
    'port':DB_PORT
});

export default conexion;