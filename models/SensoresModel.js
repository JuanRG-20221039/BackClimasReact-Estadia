import db from "../database/db";
import { DataTypes } from "sequelize";
import AulasModel from "./AulasModel";
import DispositivosMacModel from "./DispositivosMacModel";

const HistorialDatosSensoresModel = db.define('tbl_historial_datos_sensores', {
    clv_aula: {
        type: DataTypes.INTEGER,
        references: {
            model: AulasModel,
            key: 'clv_aula'
        }
    },
    vch_mac_dispositivo: {
        type: DataTypes.STRING(100),
        references: {
            model: DispositivosMacModel,
            key: 'vch_mac_dispositivo'
        }
    },
    variable: {
        type: DataTypes.STRING(100)
    },
    valor: {
        type: DataTypes.STRING(100)
    },
    fecha_hora: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'tbl_historial_datos_sensores',
    timestamps: false
});

HistorialDatosSensoresModel.belongsTo(AulasModel, { foreignKey: 'clv_aula' });
HistorialDatosSensoresModel.belongsTo(DispositivosMacModel, { foreignKey: 'vch_mac_dispositivo' });

export default HistorialDatosSensoresModel;
