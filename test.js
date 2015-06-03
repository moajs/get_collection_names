var get_collection_names = require('./');


var host  = "127.0.0.1";
var port  = "27017";
var db    = "express-g-demo";

//
get_collection_names(host, port, db, function(err, names){
  console.log(names);
})

