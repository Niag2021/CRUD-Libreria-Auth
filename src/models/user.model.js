//Modelos en Sequelize
//Importancia de la conexion a la BD 
import db from '../database/db.js';
//Importacion de sequelize
import { DataTypes } from 'sequelize';
//Definir la conexion a la BD 
const userSchema = db.define('trabajadores', {
    username: {
        type: DataTypes.STRING,
        required : true,
        //Validacion para evitar los espacios. 
        trim: true,
    },
    email: { 
        type: DataTypes.STRING, 
        required : true, 
        trim: true,
        //Validacion para valor unico. 
        unique: true,
    },
    password: { 
        type: DataTypes.NUMBER, 
        required : true, 
    },
})

export default userSchema
