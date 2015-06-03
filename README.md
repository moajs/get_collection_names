# get_collection_names

mongodb get_collection_names with mongoose.connection


## Install

  npm install --save get_collection_names

## Usages

```

var get_collection_names = require('get_collection_names');

var host  = "127.0.0.1";
var port  = "27017";
var db    = "express-g-demo";

//
get_collection_names(host, port, db, function(err, names){
  console.log(names);
})


```