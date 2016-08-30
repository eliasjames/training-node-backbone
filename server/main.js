var exp = require('express');
var fs = require('fs');
var bp = require('body-parser');

var app = exp();
var appEnv = {
  exp: exp,
  fs: fs,
  bp: bp
};

require('./routes')(app, appEnv);
require('./errorHandling')(app, appEnv);

app.listen(8080, function() {
  console.log(new Date());
});

