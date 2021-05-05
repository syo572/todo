const express = require("express");
const app = express();
const mysql = require('mysql');

//viewエンジンをejsであることを設定
app.set("view engine", "ejs");

//top画面
// app.get('/', function(req, res){
//     res.render('top.ejs')
// });
app.get('/', (req, res) => {
    connection.query(
      'SELECT * FROM users',
      (error, results) => {
        console.log(results);
        res.render('hello.ejs');
      }
    );
  });

//sqlを接続
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'konatu572',
    database: 'node_forum'
});
//sql接続できないときのエラー処理
connection.connect((err) => {
    if(err){
        console.log('error connecting:'+err.stack);
        return;
    }
    console.log('success');
});


//サーバー起動
app.listen(3000, () => console.log('app listening on port 3000!'))