import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Aula = db.define('tbl_aulas', {
  Id_aula: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre_aula: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Id_edificio: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Aula;
