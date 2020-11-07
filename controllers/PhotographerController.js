const models = require('../database/models');

const createPhotographer = async (req, res) => {
    try {
        const Photographer = await models.Photographer.create(req.body);
        return res.status(201).json({
            Photographer,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createPhotographer,

}