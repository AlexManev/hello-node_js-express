var express = require('express');
var app = express();

app.use("/app", express.static(path.join(__dirname, '../index.html')));

app.get('/', function (req, res) {
  res.send('hello, world');
});

app.listen(process.env.PORT || 3000);
