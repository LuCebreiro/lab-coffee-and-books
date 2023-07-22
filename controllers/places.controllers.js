const mongoose = require('mongoose')
const Place = require('../models/Place.model')

module.exports.list = (req, res, next) => {
  Place.find({type: req.query.type})
    .then(place => {
      res.render('places/list', { place, type: req.query.type })
    }
    )
    .catch(err => console.error(err));

};

module.exports.create = (req, res, next) => {
  res.render('createForm')
};

module.exports.doCreate = (req, res, next) => {
  console.log('entro')
  Place.create(req.body)
  .then(createdPlace => {
    res.redirect('/')
  } )
  .catch(err => console.error(err));
};

module.exports.getEditForm = (req, res, next) => {
  const { id } = req.params;

  Place.findByIdAndUpdate(id, req.body, { new: true })
  .then((place) => {
    res.render(`createForm`)
  })
  .catch(err => next(err))
};



