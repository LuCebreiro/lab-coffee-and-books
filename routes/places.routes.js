const express = require('express');
const router = express.Router();

const placeController = require('../controllers/places.controllers');

router.get('/', placeController.list);
router.get('/create', placeController.create);
router.post('/create', placeController.doCreate);

router.get('/:id/edit', placeController.getEditForm);
//router.post('/:id', placesController.editPlace);

module.exports = router;