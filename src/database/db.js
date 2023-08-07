//Importar Sequelize
import { Sequelize } from "sequelize";
//Instancia de sequelize 
const db = new Sequelize('panaderia','root','', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db