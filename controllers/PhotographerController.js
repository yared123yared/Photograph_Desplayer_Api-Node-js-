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
const getAllPhotographers = async (req, res) => {
    try {
        const photographers = await models.Photographer.findAll();
        return res.status(200).json({ photographers });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getPhotographerById = async (req, res) => {
    try {
        const { photographerId } = req.params;
        const photographer = await models.Photographer.findOne({
            where: { id: photographerId }
        });
        if (photographer) {
            return res.status(200).json({ photographer });
        }
        return res.status(404).send('Photographer  with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createPhotographer,
    getAllPhotographers,
    getPhotographerById

}