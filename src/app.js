"use strict"

//instalar el paquete express

/**
 * El paquete Express es el framework de backend más popular de node
 * Proporciona un conjunto de herraminetas para aplicaciones web, peticiones y respuestas,
 * enrutamiento y middleware para construir y desplegar aplicaciones a gran escala.
 */

import express from 'express';
import routerCliente from './routes/clientes.routes.js';
import routerLogin from './routes/login.routes.js';
import { PORT } from './config.js';
import cors from 'cors';
//import './config.js';



const app = express(); //Creado el objeto con la instancia de express


//Configurar el puerto

// const PORT=3000;

//Habilitar CORS

app.use(cors());

//middleware

app.use(express.json());
app.use(routerCliente);
app.use(routerLogin);

// middleware Controlar si se pasa una ruta en la url

app.use((req,res)=>{
    res.status(404).json({
        message:"Endpoint no encontrado"
    })
})

//servidor a la escucha por el puerto 3000


app.listen(PORT,()=>{
    console.log('Escuchando solicitudes.');
});
