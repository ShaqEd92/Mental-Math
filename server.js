const express = require("express");
const app = express();
const path = require("path")
app.use(express.static( __dirname + '/public/dist/public' ));

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.set('trust proxy', 1)

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(5000, function () {
    console.log("listening on port 5000");
})


