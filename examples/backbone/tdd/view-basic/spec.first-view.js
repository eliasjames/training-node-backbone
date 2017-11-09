describe( 'First View', function(){
  it( 'smoke test', function( done ){
    require( [ 'first-view' ], function( TestView ){
      var myView = new TestView({
        model: new Backbone.Model( { test: true } )
      });
      expect( myView.model.get( 'test' )).toEqual( true );
      done();
    }, function( err ){ console.log( 'err', err ); });
  });
});
