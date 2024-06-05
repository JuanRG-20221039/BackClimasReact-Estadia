import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const HistorialAcceso = db.define('tbl_historial_de_acceso', {
    Id_historial_acceso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Id_clave_trabajador: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Id_Clima: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Accion_realizada: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Fecha_Hora: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'tbl_historial_de_acceso',
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default HistorialAcceso;
