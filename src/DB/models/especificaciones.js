'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Especificaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Especificaciones.init({
    motor: DataTypes.STRING,
    transmision: DataTypes.STRING,
    combustible: DataTypes.STRING,
    capacidad: DataTypes.STRING,
    caracteristicas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Especificaciones',
  });
  return Especificaciones;
};