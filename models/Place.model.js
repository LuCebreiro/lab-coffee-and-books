const mongoose = require('mongoose');

const PLACETYPE = ['Coffee Shop', 'Bookstore']

const placeSchema = new mongoose.Schema(
  {
      name: {
          type: String,
          required: [true, 'Required field'],
      },
      type: {
          type: String,
          required: [true, 'Required field'],
          enum: PLACETYPE
      },
  },
  {
      timestamps: true,
  }
);

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;