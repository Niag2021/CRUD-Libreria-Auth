import app from './app.js'; 
import {connectDB} from './db.js'
import colors from 'colors'; 

connectDB()
app.listen(4000)
console.log('Server on port'.bgGreen, 4000)