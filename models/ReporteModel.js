import db from "../database/db";
import { DataTypes } from "sequelize";

const TipoDeReporteModel = db.define('tbl_tipo_de_reporte', {
    clv_tipo_reporte: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    vch_tipo_reporte: {
        type: DataTypes.STRING(100)
    }
}, {
    tableName: 'tbl_tipo_de_reporte',
    timestamps: false
});

export default TipoDeReporteModel;
