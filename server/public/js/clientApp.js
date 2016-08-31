var usersCollection = new Backbone.Collection;
usersCollection.url = '/users';
usersCollection.fetch();

var userView = Backbone.View.extend({
  el: '#app-container',
  initialize: function(){
    this.render();
  },
  render: function () {
    this.$el.html('<h1>worked</h1>');
  }
});

new userView();
