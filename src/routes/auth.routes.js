import express from 'express'; 
import { login, register } from '../controllers/auth.controllers.js';

//Enrutador que ofrece express 
const router = express.Router()

    //Ruta para los metodo del controlador. 
    router.post('/register', register) 
    router.post('/login', login) 

export default router 