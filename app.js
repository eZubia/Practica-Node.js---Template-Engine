var express = require("express");
var app = express();
var handlebars = require("express-handlebars")
        .create({ defaultLayout: "main" });
app.engine("handlebars", handlebars.engine);
app.set('view engine', 'handlebars');

app.get("/", function(req, res){
   var nombres = ["Hugo", "Paco", "Luis"];
   var data = {nombres: nombres, autor:"Erik"};

   res.render("index",data);
});

app.listen(8081);
