describe('genericTest', function() {
  it('should pass a basic test', function() {
    var testModel = new Backbone.Model({ name: 'Elias' });
    var testView =  new app.userView({ model: testModel });
    expect( testView.render().$el.html() ).toEqual(
      'Elias>&nbsp;<input type="text" value="Elias"></input>'
    );
  });
});
