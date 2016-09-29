module.exports = function (app, appEnv) {

  var userList = [
    {
      name: 'Elias',
      associateNumber: 12345
    },
    {
      name: 'Tyler',
      associateNumber: 54321
    },
    {
      name: 'Sherry',
      associateNumber: 67675
    }
  ];

  app.get('/users', function ( req, res, next ) {
    res.json( userList );
  });
}
