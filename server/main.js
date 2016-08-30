var exp = require('express');
var fs = require('fs');
var bp = require('body-parser');

var app = exp();
var appEnv = {
  exp: exp,
  fs: fs,
  bp: bp
};

app.set('view engine', 'hbs');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./routes')(app, appEnv);
require('./errorHandling')(app, appEnv);

app.listen(8080, function() {
  console.log(new Date());
});

