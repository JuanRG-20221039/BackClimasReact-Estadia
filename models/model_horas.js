import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Horas = db.define('model_horas', {
    Id_horas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Horas: {
        type: DataTypes.STRING(10),
        allowNull: true,
        unique: true
    },
    Hora_inicio: {
        type: DataTypes.TIME,
        allowNull: true
    },
    Hora_fin: {
        type: DataTypes.TIME,
        allowNull: true
    }
}, {
    tableName:'tbl_horas',
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default Horas;
