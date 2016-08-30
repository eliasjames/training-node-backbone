module.exports = function (app, appEnv) {
  app.use( appEnv.bp.urlencoded() );

  app.get('/', function ( req, res, next ) {
    appEnv.fs.readFile('index.html', 'utf8', function (err, data) {
      if ( err ) { next( err ); }
      res.send( data );
    });
  });

  app.post('/fs/:filename/write', function ( req, res, next ) {
    // use regEx to test for bad chars
    var myRegEx = /;/;
    if ( myRegEx.exec( req.body.writedata ) ) {
      next( { message: 'Invalid chars in writedata' } );
    } else {
      appEnv.fs.writeFile(req.params.filename, req.body.writedata);
      res.send('posted');
    }
  });
}
