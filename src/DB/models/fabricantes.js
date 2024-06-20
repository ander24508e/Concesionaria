'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fabricantes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fabricantes.init({
    empresa_fabricante: DataTypes.STRING,
    pais: DataTypes.STRING,
    fundacion_ano: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fabricantes',
  });
  return Fabricantes;
};