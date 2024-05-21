import db from "../database/db.js";
import { DataTypes } from "sequelize";
import ReportesModel from "./ReportesModel.js";
import TrabajadoresModel from "./TrabajadoresModel.js";

const HistorialDeReportesModel = db.define('tbl_historial_de_reportes', {
    clv_historial_reporte: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    clv_reporte: {
        type: DataTypes.INTEGER,
        references: {
            model: ReportesModel,
            key: 'clv_reporte'
        }
    },
    vch_estado: {
        type: DataTypes.STRING(50)
    },
    date_fecha: {
        type: DataTypes.DATE
    },
    vch_descripcion: {
        type: DataTypes.STRING(255)
    },
    clv_trabajador: {
        type: DataTypes.INTEGER,
        references: {
            model: TrabajadoresModel,
            key: 'clv_trabajador'
        }
    }
}, {
    tableName: 'tbl_historial_de_reportes',
    timestamps: false
});

HistorialDeReportesModel.belongsTo(ReportesModel, { foreignKey: 'clv_reporte' });
HistorialDeReportesModel.belongsTo(TrabajadoresModel, { foreignKey: 'clv_trabajador' });

export default HistorialDeReportesModel;
