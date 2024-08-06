import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Clima = db.define('tbl_climas', {
    Id_clima: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Modelo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Id_marca: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Capacidad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Voltaje: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Fecha_ingreso: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Id_vinculacion_iot: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default Clima;