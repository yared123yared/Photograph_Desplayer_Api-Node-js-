const models = require('../database/models');

const createPhotos = async (req, res) => {
    try {
        const Photos = await models.Photos.create(req.body);
        return res.status(201).json({
            Photos,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const getPhotographerByEmail = async (req, res) => {
    const { photographerId } = req.params;

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


module.exports = {
    createPhotos,
    getPhotographerByEmail


    // getPhotographerByEmail

}