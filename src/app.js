import rutas from './routes/routes.js';
import express from 'express';
import cors from 'cors';

// Importamos la conexion a la base de datos
import db from './database/db.js';

const app = express();
const PORT = process.env.PORT || 8000; // Usa la variable de entorno PORT si está disponible
const HOST = '0.0.0.0'; // Cambia a 0.0.0.0 para escuchar en todas las interfaces

app.use(cors());
app.use(express.json());
app.use('/', rutas);

// Función asíncrona para iniciar el servidor y conectar a la base de datos
const startServer = async () => {
    try {
        await db.authenticate();
        console.log('Conexion exitosa a la base de datos ✔ ✔ ✔');

        app.listen(PORT, HOST, () => {
            console.log(`Example app listening on ${HOST}:${PORT}`);
        });

    } catch (error) {
        console.log(`El error de la conexion es: ${error}`);
    }

    console.log('Después de conectar a la base de datos');
};

// Iniciamos el servidor
startServer();
