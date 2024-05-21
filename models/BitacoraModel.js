import db from '../database/db.js';
import { DataTypes } from "sequelize";
import TrabajadoresModel from "./TrabajadoresModel.js";

const BitacoraModel = db.define('tbl_bitacora', {
    clv_bitacora: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    clv_nombre_trabajador: {
        type: DataTypes.INTEGER,
        references: {
            model: TrabajadoresModel,
            key: 'clv_trabajador'
        }
    },
    vch_datosviejos: {
        type: DataTypes.TEXT
    },
    vch_datosnuevos: {
        type: DataTypes.TEXT
    },
    vch_operacion: {
        type: DataTypes.STRING(50)
    },
    tabla: {
        type: DataTypes.STRING(35)
    },
    date_timefecha: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'tbl_bitacora',
    timestamps: false
});

BitacoraModel.belongsTo(TrabajadoresModel, { foreignKey: 'clv_nombre_trabajador' });

export default BitacoraModel;
