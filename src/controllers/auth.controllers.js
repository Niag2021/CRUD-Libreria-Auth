//Importar Model 
import User from '../models/user.model.js'
//Funcion asyncrona

export const register = async (req, res) => {
    //---------------------------------------------------
    //Para ver lo que se ingresa (en postman)
    //console.log(req.body)
    //Mensaje que retorna en postman.
    //res.send('Registrando')
    //---------------------------------------------------
    const { email, password, username } = req.body
    try {
        //Para crear un usuario, Instanciar un objeto 
        const newUser = new User({ username, email, password })
        //console.log(newUser)
        await newUser.save()
        //console.log(email, password, username)
        res.send('Registrando')
    } catch (error) {
        console.log(error)
    }
    //---------------------------------------------------
}

export const login = (req, res) => {
    res.send('Login.')
}
