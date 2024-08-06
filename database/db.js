import { Sequelize } from 'sequelize';

const db = new Sequelize('bdclimas', 'admin', 'bdclimas12', {
    host: 'http://bdclimas.czkywqkockpq.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
});

try {
    await db.authenticate();
    console.log('Conexion exitosa a la base de datos');
} catch (error) {
    console.log(`El error de la conexion es: ${error}`);
}

export default db;