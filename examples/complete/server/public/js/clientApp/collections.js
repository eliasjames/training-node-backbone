var app = app || {};

app.uC = new Backbone.Collection();
app.uC.url = '/users';
app.uC.on( 'add', function( model ) {
  app.uV.createOneView( model );
}).on( 'change', function( model ) {
  app.uV.reRender( model );
}).on( 'remove', function( model ) {
  app.uV.removeView( model );
});
