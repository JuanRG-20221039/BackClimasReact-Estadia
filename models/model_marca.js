import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Marca = db.define('model_marca', {
    Id_marca: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_marca: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    tableName:'tbl_marca',
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default Marca;
