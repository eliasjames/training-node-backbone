module.exports = function (app, appEnv) {

  app.use( appEnv.bp.urlencoded() );

  var bagList = [
    {
      userId: 0,
      bagItems: [
        0, 1, 2
      ]
    }
  ];

  app.get('/bag/:userId', function ( req, res, next ) {
    var userBag, userBagId;
    for (i = 0; i < bagList.length; i++) {
      if ( bagList[i].userId === parseInt( req.params.userId )) {
        userBagId = i;
      }
    }
    if ( userBagId !== undefined ) {
      userBag = bagList[ userBagId ];
      res.json( userBag );
    } else {
      next( { code: 500, message: "No bag for userId " + req.params.userId } );
    }
  });

  app.post('/bag', function ( req, res, next ) {
    var newBag = req.body.bagObject;
    bagList.push( JSON.parse( newBag ));
    res.json( bagList );
  });
}
