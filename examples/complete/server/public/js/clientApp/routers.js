var app = app || {};

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
