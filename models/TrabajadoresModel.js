// Importación de la conexión con la base de datos
import db from "../database/db.js";
import { DataTypes } from "sequelize";
import TipoDeTrabajadorModel from './TipoTrabajadorModel.js';

// Modelo de tbl_trabajadores
const TrabajadoresModel = db.define('tbl_trabajadores', {
    clv_trabajador: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    vch_nombre_trabajador: {
        type: DataTypes.STRING(100)
    },
    correo: {
        type: DataTypes.STRING(100)
    },
    vch_tipo_trabajador: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoDeTrabajadorModel,
            key: 'clv_tipo_trabajador'
        }
    },
    vch_password: {
        type: DataTypes.STRING(100)
    },
    vch_foto: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: 'tbl_trabajadores',
    timestamps: false
});

// Definir la relación
TrabajadoresModel.belongsTo(TipoDeTrabajadorModel, { foreignKey: 'vch_tipo_trabajador' });
TipoDeTrabajadorModel.hasMany(TrabajadoresModel, { foreignKey: 'vch_tipo_trabajador' });

export default TrabajadoresModel;
