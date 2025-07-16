const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
});

const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  description: String,
  rating: Number,
  deliveryTime: Number,
  deliveryFee: Number,
  image: String,
  address: String,
  menu: [menuItemSchema],
});

module.exports = mongoose.model('Restaurant', restaurantSchema); 