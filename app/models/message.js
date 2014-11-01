
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MessageSchema = new Schema({
  text: String,
  user_id: String,
  username: String,
  color: String
});

mongoose.model('Message', MessageSchema);

