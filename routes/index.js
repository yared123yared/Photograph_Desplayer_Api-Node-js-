const { Router } = require('express');
const controllers = require('../controllers/PhotographerController');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/photographers', controllers.createPhotographer);

module.exports = router;