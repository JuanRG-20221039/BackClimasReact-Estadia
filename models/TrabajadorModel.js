// Importación de la conexión con la base de datos
import db from "../database/db";
import { DataTypes } from "sequelize";

// Modelo de tbl_tipo_de_trabajador
const TipoDeTrabajadorModel = db.define('tbl_tipo_de_trabajador', {
    clv_tipo_trabajador: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    vch_rol: {
        type: DataTypes.STRING(50)
    },
    vch_puesto: {
        type: DataTypes.STRING(50)
    }
}, {
    tableName: 'tbl_tipo_de_trabajador',
    timestamps: false
});

export default TipoDeTrabajadorModel;
