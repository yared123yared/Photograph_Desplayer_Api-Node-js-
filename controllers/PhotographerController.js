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
    const { photographerId } = req.params;
    if (typeof photographerId == "number") {


        try {


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
    else {
        try {
            // const { photographerEmail } = req.params;
            const photographer = await models.Photographer.findOne({
                where: { Email: photographerId }
            });
            if (photographer) {
                return res.status(200).json({ photographer });
            }
            return res.status(404).send('Photographer  with the specified Email does not exists');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
}
const updatPhotographer = async (req, res) => {
    try {
        const { photographerId } = req.params;
        const [updated] = await models.Photographer.update(req.body, {
            where: { id: photographerId }
        });
        if (updated) {
            const updatedPhotographer = await models.Photographer.findOne({ where: { id: photographerId } });
            return res.status(200).json({ photographer: updatedPhotographer });
        }
        throw new Error('Post not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const deletePhotographer = async (req, res) => {
    try {
        const { photographerId } = req.params;
        const deleted = await models.Photographer.destroy({
            where: { id: photographerId }
        });
        if (deleted) {
            return res.status(204).send("Photographer deleted");
        }
        throw new Error("Photographer not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createPhotographer,
    getAllPhotographers,
    getPhotographerById,
    updatPhotographer,
    deletePhotographer,
    // getPhotographerByEmail

}