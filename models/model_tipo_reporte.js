import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const TipoReporte = db.define('model_tipo_reporte', {
    Id_tipo_reporte: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Tipo_reporte: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    tableName:'tbl_tipo_reporte',
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default TipoReporte;
