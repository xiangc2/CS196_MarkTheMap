var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var MarkerSchema = new Schema({
    x_coordinate: Number,
    y_coordinate: Number,
    title: String,
    message: String,
    type: String,
    creation_time: String,
  //creator: User
    times_flagged: Number
})

module.exports = mongoose.model('Marker',MarkerSchema);