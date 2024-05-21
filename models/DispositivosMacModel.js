import db from "../database/db.js";
import { DataTypes } from "sequelize";
import AulasModel from "./AulasModel.js";

const DispositivosMacModel = db.define('tbl_dispositivos_mac', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    vch_mac_dispositivo: {
        type: DataTypes.STRING(100),
        unique: true
    },
    vch_nombre_dispositivo: {
        type: DataTypes.STRING(100)
    },
    clv_aula: {
        type: DataTypes.INTEGER,
        references: {
            model: AulasModel,
            key: 'clv_aula'
        }
    },
    clv_edificio: {
        type: DataTypes.INTEGER
    },
    date_fecha: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'tbl_dispositivos_mac',
    timestamps: false
});

DispositivosMacModel.belongsTo(AulasModel, { foreignKey: 'clv_aula' });

export default DispositivosMacModel;
