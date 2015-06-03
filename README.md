# get_collection_names

mongodb get_collection_names with mongoose.connection


## Install

  npm install --save get_collection_names

## Usages


  var mongoose = require('mongoose');

  require('./config/mongo');

  var get_collection_names = require('get_collection_names');

  get_collection_names(mongoose.connection, function(err, names){
    console.log(names);
  })

