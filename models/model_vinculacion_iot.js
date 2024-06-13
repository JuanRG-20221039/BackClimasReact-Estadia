// models/model_vinculacion_iot.js
import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import Iot from './model_iot.js'; // Asumiendo que tienes un modelo llamado 'model_iot.js'

const VinculacionIot = db.define('VinculacionIot', {
    Id_vinculacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Id_placa_principal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Iot,
            key: 'Id_iot'
        }
    },
    Id_Placa_secundaria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Iot,
            key: 'Id_iot'
        }
    }
}, {
    tableName: 'tbl_vinculacion_iot',
    timestamps: false
});

// Definir las relaciones
VinculacionIot.belongsTo(Iot, { as: 'PlacaPrincipal', foreignKey: 'Id_placa_principal' });
VinculacionIot.belongsTo(Iot, { as: 'PlacaSecundaria', foreignKey: 'Id_Placa_secundaria' });

export default VinculacionIot;
