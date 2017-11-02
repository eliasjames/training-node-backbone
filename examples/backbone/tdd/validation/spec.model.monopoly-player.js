describe( 'Monopoly Player', function(){
  var testModel,
    myModel,
    myPlayer;

  beforeEach( function(){
    testModel = {
      boardMarker: 'thimble',
      realNameFirst: 'Elias', 
      realNameLast: 'Carlston', 
      userName: 'Ace76'
    };
    
    myModel =  require( './model.monopoly-player.js' )( undefined );
    myPlayer =  myModel( testModel );
  });

  it( 'can have optional fields', function(){
    expect( myPlayer.get( 'realNameFirst' )).toEqual( testModel.realNameFirst );
  });

  it( 'must have required fields', function(){
    var myTestModel = { realNameFirst: 'Elias' };
    expect( myModel.bind( myModel, myTestModel )).toThrow( 'missing userName' );
  });

  it( 'must require boardMarker', function(){
    var myTestModel = { 
      realNameFirst: 'Elias', 
      userName: 'Ace76' 
    };
    expect( myModel.bind( myModel, myTestModel )).toThrow( 'missing boardMarker' );
  });

  it( 'must require userName', function(){
    var myTestModel = { 
      realNameFirst: 'Elias', 
      boardMarker: 'thimble' 
    };
    expect( myModel.bind( myModel, myTestModel )).toThrow();
  });

  it( 'must enforce userName requirements', function(){
    // various forms of not-empty
    expect( myPlayer.set.bind( myPlayer, { 'userName': undefined } )).toThrow();
    expect( myPlayer.set.bind( myPlayer, { 'userName': null } )).toThrow();
    expect( myPlayer.set.bind( myPlayer, { 'userName': '' } )).toThrow();
    expect( myPlayer.set.bind( myPlayer, { 'userName': 'a' } )).toThrow();
  });
});
