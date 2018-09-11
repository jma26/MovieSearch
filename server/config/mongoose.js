let mlab = require('./mlabConfig.js');
// Require mongoose
var mongoose = require('mongoose');
// require the fs module for loading model files
var fs = require('fs');
// require path for getting the models path
var path = require('path');
// Connect to mongoose or mlab
mongoose.connect(`mongodb://${mlab.dbUser}:${mlab.dbPassword}@ds151602.mlab.com:51602/moviesearch`, { autoIndex: false }).then((success) => {
  console.log('Successful connection!');
}).catch((error) => {
  console.log(error);
})
// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');
// Use native promises
mongoose.Promise = global.Promise;
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});