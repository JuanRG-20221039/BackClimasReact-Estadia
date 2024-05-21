import db from "../database/db";
import { DataTypes } from "sequelize";
import TrabajadoresModel from "./TrabajadoresModel";
import TipoDeReporteModel from "./TipoDeReporteModel";
import AulasModel from "./AulasModel";

const ReportesModel = db.define('tbl_reportes', {
    clv_reporte: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    clv_edificio: {
        type: DataTypes.INTEGER
    },
    clv_aula: {
        type: DataTypes.INTEGER,
        references: {
            model: AulasModel,
            key: 'clv_aula'
        }
    },
    clv_trabajador: {
        type: DataTypes.INTEGER,
        references: {
            model: TrabajadoresModel,
            key: 'clv_trabajador'
        }
    },
    date_fecha: {
        type: DataTypes.DATE
    },
    time_hora: {
        type: DataTypes.TIME
    },
    vch_descripcion: {
        type: DataTypes.STRING(255)
    },
    clv_tipo_reporte: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoDeReporteModel,
            key: 'clv_tipo_reporte'
        }
    }
}, {
    tableName: 'tbl_reportes',
    timestamps: false
});

ReportesModel.belongsTo(TrabajadoresModel, { foreignKey: 'clv_trabajador' });
ReportesModel.belongsTo(TipoDeReporteModel, { foreignKey: 'clv_tipo_reporte' });
ReportesModel.belongsTo(AulasModel, { foreignKey: 'clv_aula' });

export default ReportesModel;