import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Dia = db.define('tbl_dias', {
    Id_dias: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Dia: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true
    }
}, {
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default Dia;
