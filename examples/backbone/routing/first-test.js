describe( 'BackboneApp', function() {
  console.log( 'started first-test' );

  var testName;
  var myModel ;
  beforeEach( function() {
    testName = 'John';
    myModel = new ChatMessageModel( { 
      name: testName,
      message: 'Test'
    });
  });
  afterEach( function() {
    testName = undefined;
    myModel = undefined;
  });

  it( 'should create a chat model', function() {
    // myModel.set( 'name', undefined );
    expect( myModel ).not.toBeUndefined();
    expect( myModel.get( 'name' )).toEqual( testName );
  });

  it( 'should create a view from a model', function(){
    var myView = new ChatMessageView({ 
      model: myModel
    });
    console.log( 'model ', myView );

    expect( myView.model.get( 'name' ) ).toEqual( testName );
  });
});
