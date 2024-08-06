import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const TipoAula = sequelize.define('TipoAula', {
    Id_tipo_aula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Tipo: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'tbl_tipos_aula',
    timestamps: false
});

export default TipoAula;
