'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vehiculo.init({
    name: DataTypes.STRING,
    marca: DataTypes.STRING,
    color: DataTypes.STRING,
    ano: DataTypes.DATE,
    precio: DataTypes.DECIMAL,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vehiculo',
  });
  return vehiculo;
};