'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vehiculos.init({
    name: DataTypes.STRING,
    marca: DataTypes.STRING,
    color: DataTypes.STRING,
    ano: DataTypes.STRING,
    precio: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vehiculos',
  });
  return Vehiculos;
};