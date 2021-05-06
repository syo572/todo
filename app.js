const express = require("express");
const app = express();
const mysql = require('mysql');

//viewエンジンをejsであることを設定
app.set("view engine", "ejs");

//ログイン・新規登録、画面
app.get('/signup',(req,res) => {
  res.render('signup.ejs');
});
//トップ画面
app.get('/', (req, res) => {
  res.render('top.ejs');
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