var app = {};

app.userView = Backbone.View.extend({
  render: function() {
    var that = this;
    var templateString = '<li><%= name %>&nbsp;<input type="text" value="<%= name %>"></input></li>';

    // two way data binding: set model data as user types
    this.$el.html(
      _.template( templateString )( { name: this.model.get( 'name' ) })
    ).children('li').children('input').focus();
    this.$el.children('li').children('input').on('keyup', function (e) {
      that.model.set({ name: this.value });
    });

    return this;
  } });

app.usersView = Backbone.View.extend({
  el: '#users-container',
  _liArray: [],
  initialize: function() {
  },
  createOneView: function( userModel ) {
    var view = new app.userView( { model: userModel } );
    this._liArray.push( view );
    $( '#users-list' ).append( view.render().el );
  },
  reRender: function (updatedModel) {
    _(this._liArray).where({model: updatedModel })[0].render();    
  },
  removeView: function (removeModel) {
    var removedView = _(this._liArray).where({model: removeModel})[0];    
    removedView.$el.html('');
    this._liArray.splice(_.indexOf(removedView), 1);
  }
});
app.uV = new app.usersView();

app.uC = new Backbone.Collection();
app.uC.url = '/users';
app.uC.on( 'add', function( model ) {
  app.uV.createOneView( model );
}).on( 'change', function( model ) {
  app.uV.reRender( model );
}).on( 'remove', function( model ) {
  app.uV.removeView( model );
});

app.routing = Backbone.Router.extend({
  routes: {
    'fetch/users': 'fetchUsers'
  },
  'fetchUsers': function ( routeVar ) { 
    app.uC.fetch({
      error: function() { console.log( arguments ); }
    });
  }
});

$(document).ready(function () {
  new app.routing();
  Backbone.history.start();
});
