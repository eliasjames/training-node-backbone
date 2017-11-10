var StaticView = Backbone.View.extend({
  render: function(){
    this.el.innerHTML = '<h1>static content</h1>';
  }
});
var myStatic = new StaticView();
