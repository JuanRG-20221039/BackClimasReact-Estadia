import db from "../database/db";
import { DataTypes } from "sequelize";
import TipoMantenimientoModel from "./TipoMantenimientoModel";
import AulasModel from "./AulasModel";
import TrabajadoresModel from "./TrabajadoresModel";

const MantenimientoModel = db.define('tbl_mantenimiento', {
    clv_mantenimiento: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    clv_tipo_mantenimiento: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoMantenimientoModel,
            key: 'clv_tipo_mantenimiento'
        }
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
    vch_observacion: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: 'tbl_mantenimiento',
    timestamps: false
});

MantenimientoModel.belongsTo(TipoMantenimientoModel, { foreignKey: 'clv_tipo_mantenimiento' });
MantenimientoModel.belongsTo(AulasModel, { foreignKey: 'clv_aula' });
MantenimientoModel.belongsTo(TrabajadoresModel, { foreignKey: 'clv_trabajador' });

export default MantenimientoModel;
