import rutas from './routes/routes.js';
import express from 'express';
import cors from 'cors';

// Importamos la conexion a la base de datos
import db from './database/db.js';

const app = express();
const PORT = 8000;
const HOST = '0.0.0.0'; // Escuchar en todas las interfaces de red
const IP = '192.168.249.5'; // Tu dirección IP local

app.use(cors());
app.use(express.json());
app.use('/', rutas);

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://localhost:${PORT} and on the network at http://${IP}:${PORT}`);
});

try {
    await db.authenticate();
    console.log('Conexion exitosa a la base de datos');
} catch (error) {
    console.log(`El error de la conexion es: ${error}`);
}