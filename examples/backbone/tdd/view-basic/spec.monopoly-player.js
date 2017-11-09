describe( 'Monopoly Player View', function(){
  it( 'smoke test', function( done ){
    require( [ 'view.monopoly-player', 'model.monopoly-player' ], function( TestView, TestModel ){
      var testModelAttrs = {
        boardMarker: 'thimble',
        realNameFirst: 'Elias',
        realNameLast: 'Carlston',
        userName: 'Ace76'
      };
      var myView = new TestView({
        model: new TestModel( testModelAttrs )
      });
      expect( myView.model.get( 'userName' )).toEqual( 'Ace76' );
      done();
    }, function( err ){ console.log( 'err', err ); });
  });
});
