var MongoClient = require('mongodb').MongoClient
  , format = require('util').format;

module.exports = get_collection_names = function(connection, cb){
  var host    = connection.host;
  var port    = connection.port;
  var dbname  = connection.name;

  MongoClient.connect('mongodb://' + host + ':' + port + '/' + dbname, function(err, db) {
    if(err) throw err;
    db.collections(function(err , c){
      var names = [];
      for(var i in c){
        var name = _name(c[i].s.name);
        if(name == undefined | name == 'undefined'){

        }else{
          console.log(name)
          names.push(name);;
        }
      }
      
      cb(err, names);
    });
  
    _name = function (name){
      if(name.match(/^sys/g) ){
        return;
      }
      
      return name;
    }
  });
}