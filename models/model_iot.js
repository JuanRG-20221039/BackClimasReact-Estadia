import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const IoT = db.define('model_iot', {
    Id_iot: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Mac_dispositivo: {
        type: DataTypes.STRING(50),
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
        type: DataTypes.TINYINT,
        allowNull: true
    },
    Alias_iot: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    tableName: 'tbl_iot',
    timestamps: false
});

export default IoT;
