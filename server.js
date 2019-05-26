var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;

var app= express();

var routes = require("./routes");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsScrapings"

mongoose.connect(MONGODB_URI);

app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
})