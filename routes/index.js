const { Router } = require('express');
const controllers = require('../controllers/PhotographerController');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/photographers', controllers.createPhotographer);

router.get('/photographers', controllers.getAllPhotographers);

router.get('/photographers/:photographerId', controllers.getPhotographerById);

module.exports = router;