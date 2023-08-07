import app from './app.js';
import db from './database/db.js';
import colors from 'colors';

try {
    await db.authenticate()
    console.log('Conexion exitosa a la BD.'.bgMagenta)
} catch (error) {
    console.log('El error de conexion es : ${error}')
}

app.get('/home', (req, res) => {
    res.send('Pagina de inicio.')
})


app.listen(4000)
console.log('Server on port'.bgMagenta, 4000)