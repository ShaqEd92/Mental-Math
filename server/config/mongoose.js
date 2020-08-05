var path = require('path');
var fs = require('fs');
var models_path = path.join(__dirname, './../models');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/MentalMath', { useNewUrlParser: true, useUnifiedTopology: true });

fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})

// //Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/MentalMath';
// mongoose.connect(mongoDB, { useNewUrlParser: true });

// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));