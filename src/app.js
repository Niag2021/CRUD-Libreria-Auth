//Importar express 
import express  from "express";
import morgan from "morgan";
//Inicializa express 
const app = express()

app.use(morgan('dev')); 

export default app;