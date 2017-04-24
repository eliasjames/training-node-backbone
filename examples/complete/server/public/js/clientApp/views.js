var app = app || {};

app.userView = Backbone.View.extend({
  tagName: 'li',
  render: function() {
    var that = this;
//    var templateString = '<%= name %>&nbsp;<input type="text" value="<%= name %>"></input>';

    // two way data binding: set model data as user types
    var template = Handlebars.compile( $('#PersonTemplate').html())
Handlebars.registerPartial('userMessage','<{{tagName}}>By {{author.firstName}} {{author.lastName}}</{{tagName}}><div class="body">{{body}}</div>');
    this.$el.html(
//      _.template( templateString )( { name: this.model.get( 'name' ) })
      template( this.model )
    ).children('input').focus();
    this.$el.children('input').on('keyup', function (e) {
      that.model.set({ name: this.value }).save();
    });

    return this;
  } 
});

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
