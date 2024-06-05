import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Edificio = db.define('tbl_edificios', {
    Id_edificio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_edificio: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Imagen: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default Edificio;
