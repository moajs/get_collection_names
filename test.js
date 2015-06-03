
var mongoose = require('mongoose');
require('./config/mongo');

var get_collection_names = require('./');

get_collection_names(mongoose.connection, function(err, names){
  console.log(names);
})

