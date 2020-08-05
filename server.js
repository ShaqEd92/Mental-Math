const express = require("express");
const app = express();
const path = require("path")
app.use(express.static( __dirname + '/public/dist/public' ));

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.set('trust proxy', 1)

require('./server/config/routes.js')(app)

app.listen(8080, function () {
    console.log("listening on port 8080");
})