import db from "../database/db.js";
import { DataTypes } from "sequelize";
import AulasModel from "./AulasModel.js";

const ClimasModel = db.define('tbl_climas', {
    clv_serie: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    vch_modelo: {
        type: DataTypes.STRING(100)
    },
    vch_marca: {
        type: DataTypes.STRING(100)
    },
    vch_capacidad: {
        type: DataTypes.STRING(50)
    },
    vch_voltaje: {
        type: DataTypes.STRING(50)
    },
    date_ingreso: {
        type: DataTypes.DATE
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
    estado: {
        type: DataTypes.STRING(25)
    }
}, {
    tableName: 'tbl_climas',
    timestamps: false
});

ClimasModel.belongsTo(AulasModel, { foreignKey: 'clv_aula' });

export default ClimasModel;
