'use strict'
import {check,validationResult} from 'express-validator';

export const validacion =[
    //Valdiar el nombre del cliente.
    check('nameCliente').exists().notEmpty().isLength({min:5, max:40}).withMessage
    ('El nombre del cliente no debe estar vacío, debe entre 5-40 carácteres.'),
    //Validar email del cliente.
    check('emailCliente').exists().notEmpty().isEmail().withMessage
    ('El email del cliente no debe estar vacío y debe tener formato de email.'),
    //Validar teléfono del cliente.
    check('tlfnoCliente').exists().notEmpty().isLength({min:9,max:9}).isNumeric().withMessage
    ('El telefono del cliente no debe estar vacío y debe tener 9 números.'),
    //Validar la empresa del cliente.
    check('empresaCliente').exists().notEmpty().matches(/^[A-Z][a-zñA-zÑ0-9\s]{4,49}$/).withMessage
    ('La empresa  del cliente no debe estar vacío y debe tener 5-50 carácteres.'),
    (req,res,next)=>{
        const errors = validationResult(req); //Array tantas filas como campos valide
        if (!errors.isEmpty()) {
            res.status(400).json({
                errors:errors.array() //Devolver el mensaje
            })
        }else{ //Todo correcto
            next(); //Sigue la ejecucución del siguiente middleware.
        }
    }
]