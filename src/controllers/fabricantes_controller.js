const db = require("../DB/models");
const model = require('../DB/models/fabricantes')(db.sequelize, db.Sequelize);

module.exports.GetFabricante = async () => {
    const response = await model.findAll();
    return response;
}

module.exports.GetFabricanteById = async (id) => {
    const response = await model.findByPk(id);
    return response;
};

module.exports.CreateFabricante = async (data) => {
    const response = await db.Fabricantes.create(data);
    return {
        message: 'Fabricante creado con éxito',
        data: response
    };
};

module.exports.UpdateFabricante = async (id, data) => {
    const fabricante = await model.findByPk(id);
    if (!fabricante) throw new Error('Fabricante no encontrado');
    await fabricante.update(data);
    return {
        message: 'Fabricante actualizado satisfactoriamente',
        data: fabricante
    };
};

module.exports.DeleteFabricante = async (id) => {
    const fabricante = await model.findByPk(id);
    if (!fabricante) throw new Error('Fabricante no encontrado');
    await fabricante.destroy();
    return { message: 'Fabricante eliminado satisfactoriamente' };
};