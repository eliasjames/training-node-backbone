var FirstModel = Backbone.Model.extend({
  defaults: {
    firstName: 'John',
    lastName: 'Doe'
  },
  sayHello: function() {
    return 'Hello, I am ' + this.get( 'firstName' ) + ' ' + this.get( 'lastName' );
  }
});
