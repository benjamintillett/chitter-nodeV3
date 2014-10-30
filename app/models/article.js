// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PeepSchema = new Schema({
  peep: String,
});

mongoose.model('Peep', PeepSchema);

