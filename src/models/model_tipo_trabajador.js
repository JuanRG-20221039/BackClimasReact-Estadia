import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const TipoTrabajador = db.define('model_tipo_trabajador', {
    Id_tipo_de_trabajador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Tipo_trabajador: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true
    }
}, {
    tableName:'tbl_tipos_de_trabajadores',
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default TipoTrabajador;
