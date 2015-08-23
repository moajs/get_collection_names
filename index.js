var MongoClient = require('mongodb').MongoClient
  , format = require('util').format;

module.exports = get_collection_names = function(host, port, db, cb){
   
  MongoClient.connect('mongodb://' + host + ':' + port + '/' + db, function(err, db) {
    if(err) throw err;
    db.collections(function(err , c){
      var names = [];
      for(var i in c){
        var name = _name(c[i].s.name);
        if(name == undefined | name == 'undefined'){

        }else{
          // console.log(name)
          names.push(name);;
        }
      }
    
      db.close();
      return cb(err, names);
    });
  });
 
 
  function _name(name) {
    if ( name.match(/^sys/g) ) {
      return;
    }
  
    return name;
  } 
}