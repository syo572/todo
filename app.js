const express = require("express");
const app = express();
const mysql = require('mysql');

//ここ要確認
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//viewエンジンをejsであることを設定
app.set("view engine", "ejs");

//ログイン画面
app.get('/login', (req, res) => {
  res.render('login.ejs');
});
//認証処理
app.post('/login', (req, res) => {
  const email = req.body;
  console.log(email);
});
//トップ画面
app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM article',
    (error, result) => {
      res.render('top.ejs', { article: result });
    }
  );
});
//トップ画面処理
app.post('/create', (req, res) => {
  connection.query(
    'INSERT INTO article (text) VALUES (?)',
    [req.body.add],
    (error, result) => {
      res.redirect('/');
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
  if (err) {
    console.log('error connecting:' + err.stack);
    return;
  }
  console.log('success');
});


//サーバー起動
app.listen(3000, () => console.log('app listening on port 3000!'))