
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MessageSchema = new Schema({
  text: String,
});

mongoose.model('Message', MessageSchema);

