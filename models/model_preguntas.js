import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Pregunta = db.define('tbl_preguntas', {
    Id_pregunta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Pregunta: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default Pregunta;
