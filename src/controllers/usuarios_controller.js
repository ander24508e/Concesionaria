const db = require("../DB/models");
const model = require('../DB/models/usuarios')(db.sequelize, db.Sequelize);

module.exports.CreateUser = async (data) => {
    try {
        const res = await db.Usuarios.create(data);
        return res;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

module.exports.FindUserByEmail = async (email) => {
    try {
        const user = await db.Usuarios.findOne({
            where: { email }
        });

        if (user) return user;
        return null;
    } catch (error) {
        console.error("Error finding user:", error);
        throw error;
    }
}
