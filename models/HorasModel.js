import db from "../database/db";
import { DataTypes } from "sequelize";

const HorasModel = db.define('tbl_horas', {
    clv_hora: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    time_inicio: {
        type: DataTypes.TIME
    },
    time_final: {
        type: DataTypes.TIME
    },
    vch_turno: {
        type: DataTypes.STRING(50)
    }
}, {
    tableName: 'tbl_horas',
    timestamps: false
});

export default HorasModel;
