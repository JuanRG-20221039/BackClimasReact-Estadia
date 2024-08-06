import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Perfil = db.define('model_perfil', {
    Id_perfil: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    perfil: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true
    }
}, {
    tableName:'tbl_perfiles',
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default Perfil;
