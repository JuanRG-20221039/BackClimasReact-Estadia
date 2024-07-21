import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const CodigoClima = db.define('tbl_codigos_climas', {
    Id_codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_codigo: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    Codigo_on: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Codigo_off: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tbl_codigos_climas',
});

export default CodigoClima;