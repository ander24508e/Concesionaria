const db = require("../DB/models");
const model = require('../DB/models/especificaciones')(db.sequelize, db.Sequelize);

module.exports.GetEspecificaciones = async () => {
    const response = await model.findAll();
    return response;
}

module.exports.GetEspecificacionesById = async (id) => {
    const response = await model.findByPk(id);
    return response;
};

module.exports.CreateEspecificaciones = async (data) => {
    const response = await db.Especificaciones.create(data);
    return {
        message: 'Especificación creada satisfactoriamente',
        data: response
    };
};

module.exports.UpdateEspecificaciones = async (id, data) => {
    const especificacion = await model.findByPk(id);
    if (!especificacion) throw new Error('Especificación no encontrada');
    await especificacion.update(data);
    return {
        message: 'Especificación actualizada satisfactoriamente',
        data: especificacion
    };
};

module.exports.DeleteEspecificaciones = async (id) => {
    const especificacion = await model.findByPk(id);
    if (!especificacion) throw new Error('Especificación no encontrada');
    await especificacion.destroy();
    return { message: 'Especificación borrada satisfactoriamente' };
};