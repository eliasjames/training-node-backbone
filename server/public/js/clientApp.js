var app = {};

app.userView = Backbone.View.extend({
  render: function() {
    this.$el.html(
      _.template( '<li><%= name %></li>' )( { name: this.model.get( 'name' ) })
    );
    return this;
  }
});

app.usersView = Backbone.View.extend({
  el: '#users-container',
  initialize: function() {
  },
  addOne: function( userModel ) {
    var view = new app.userView( { model: userModel } );
    $( '#users-list' ).append( view.render().el );
  },
  addAll: function() {
    $( '#users-list' ).html('');
    app.usersCollection.each( this.addOne, this );
  }
});
app.uV = new app.usersView();

app.usersCollection = Backbone.Collection.extend({});

app.uC = new app.usersCollection();
app.uC.url = '/users';
app.uC.on( 'add', function( model ) {
  app.uV.addOne( model );
});
app.uC.on( 'reset', function( model ) {
  app.uV.addAll( model ) 
});
app.uC.fetch({
  error: function() { console.log( arguments ); }
});
