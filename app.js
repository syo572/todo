var express = require("express");
var app = express();

//viewエンジンをejsであることを設定
app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render('top.ejs')
});

app.listen(3000, () => console.log('app listening on port 3000!'))