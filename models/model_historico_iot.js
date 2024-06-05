import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const HistoricoIOT = db.define('tbl_historico_iot', {
    Id_historico_iot: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Id_iot: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Presencia_personas: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Humedad_value: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Temperatura_value: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Estado_clima: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    Fecha_hora: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'tbl_historico_iot',
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default HistoricoIOT;
