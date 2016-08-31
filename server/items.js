module.exports = function (app, appEnv) {

  app.use( appEnv.bp.urlencoded() );

  var itemList = [
    {
      name: 'Pants',
      UPC: 12345,
      price: '50.00'
    },
    {
      name: 'Shirt',
      UPC: 54321,
      price: '40.00'
    },
    {
      name: 'Suitcase',
      UPC: 67675,
      price: '180.00'
    }
  ];

  app.get('/items', function ( req, res, next ) {
    res.json( itemList );
  });

  app.post('/items', function ( req, res, next ) {
    var newItem = req.body.itemObject;
    itemList.push( JSON.parse( newItem ));
    res.json( itemList );
  });
}
