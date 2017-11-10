function initFirst( firstModelObj ){
  var myModel = new FirstModel( firstModelObj );
  var myView = new FirstView({ model: myModel });
  document.addEventListener( 'DOMContentLoaded', function() {
    document.getElementsByTagName( 'body' )[0].append( myView.el );
    myView.render();
  });
}
