describe( 'First View', function(){
  it( 'smoke test', function(){
    require( ['./first-view.js'], function( TestView ){
      var myView = new TestView({
        model: new Backbone.Model( { test: true } )
      });
      expect( myView.get( 'test' )).toEqual( true );
    });
  });
});
