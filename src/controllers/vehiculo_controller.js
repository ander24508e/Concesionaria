const db = require('../DB/models');
const model = require("../DB/models/vehiculos")(db.sequelize, db.Sequelize);

module.exports.GetVehiculos = async () => {
    const response = await model.findAll();
    return response;
}

module.exports.GetVehiculosById = async (id) => {
    const response = await model.findByPk(id);
    return response;
};

module.exports.CreateVehiculos = async (data) => {
    const response = await db.Vehiculos.create(data);
    return {
        message: 'Vehículo creado con éxito',
        data: response
    };
};

module.exports.UpdateVehiculos = async (id, data) => {
    const vehiculo = await model.findByPk(id);
    if (!vehiculo) throw new Error('Vehículo no encontrado');
    await vehiculo.update(data);
    return {
        message: 'Vehículo actualizado satisfactoriamente',
        data: vehiculo
    };
};

module.exports.DeleteVehiculos = async (id) => {
    const vehiculo = await model.findByPk(id);
    if (!vehiculo) throw new Error('Vehículo no encontrado');
    await vehiculo.destroy();
    return { message: 'Vehículo eliminado satisfactoriamente' };
};