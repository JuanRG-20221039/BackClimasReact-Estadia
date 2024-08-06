import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Horario = db.define('model_horario', {
    Id_horario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Id_aula: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Id_Dia: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Id_Horas: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName:'tbl_horario',
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default Horario;
