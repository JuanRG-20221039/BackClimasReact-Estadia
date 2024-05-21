import db from "../database/db.js";
import { DataTypes } from "sequelize";

const TipoMantenimientoModel = db.define('tbl_tipo_mantenimiento', {
    clv_tipo_mantenimiento: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    vch_tipo: {
        type: DataTypes.STRING(50)
    }
}, {
    tableName: 'tbl_tipo_mantenimiento',
    timestamps: false
});

export default TipoMantenimientoModel;
