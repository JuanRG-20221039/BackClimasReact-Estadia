import rutas from './routes/routes.js';
import express from 'express';
import cors from 'cors';

// Importamos la conexion a la base de datos
import db from './database/db.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/', rutas);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

try {
    await db.authenticate();
    console.log('Conexion exitosa a la base de datos ✔ ✔ ✔');
} catch (error) {
    console.log(`El error de la conexion es: ${error}`);
}