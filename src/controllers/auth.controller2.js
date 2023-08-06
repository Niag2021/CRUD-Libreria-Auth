import User from '../models/user.model2.js'

export const register = async (req, res) => {
    //res.send("Register"); 
    //console.log(req.body)
    const { email, password, username } = req.body;
    try {
        const newUser = new User({
            username,
            email,
            password
        });

        //console.log(email, password, username)
        await newUser.save();
        res.send('Registrando');
    } catch (error) {
        console.log(error);
    }
}

export const login = (req, res) => res.send("Login"); 