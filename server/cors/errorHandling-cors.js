module.exports = function (app, appEnv) {
  app.use( logger );
  app.use( genericHandler );

  function logger ( err, req, res, next ) {
    console.error( err, req );
    next( err );
  }
  
  function genericHandler ( err, req, res, next ) {
    res.status( 500 ).send( err.message );  
  }
}
