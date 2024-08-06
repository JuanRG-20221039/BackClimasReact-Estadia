import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import Clima from './model_climas.js';
import Aula from './model_aulas.js';

const UbicacionClima = db.define('model_ubicacion_clima', {
    Id_ubicacion_Clima: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Id_clima: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Clima,
            key: 'Id_clima'
        }
    },
    Id_aula: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Aula,
            key: 'Id_aula'
        }
    }
}, {
    tableName:'tbl_ubicaciones_climas',
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

// Relaciones
UbicacionClima.belongsTo(Clima, { foreignKey: 'Id_clima' });
UbicacionClima.belongsTo(Aula, { foreignKey: 'Id_aula' });

export default UbicacionClima;
