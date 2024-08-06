import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import Trabajador from './model_trabajador.js'; // Importa el modelo de Trabajador
import Pregunta from './model_preguntas.js'; // Importa el modelo de Pregunta

const Respuesta = db.define('tbl_respuestas', {
    Id_respuesta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Id_clave_trabajador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Trabajador,
            key: 'Id_clave_trabajador'
        }
    },
    Id_pregunta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pregunta,
            key: 'Id_pregunta'
        }
    },
    Respuesta: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

// Define las relaciones
Trabajador.hasMany(Respuesta, { foreignKey: 'Id_clave_trabajador' });
Respuesta.belongsTo(Trabajador, { foreignKey: 'Id_clave_trabajador' });

Pregunta.hasMany(Respuesta, { foreignKey: 'Id_pregunta' });
Respuesta.belongsTo(Pregunta, { foreignKey: 'Id_pregunta' });

export default Respuesta;
