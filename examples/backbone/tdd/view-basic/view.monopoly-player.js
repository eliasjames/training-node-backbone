define( 'view.monopoly-player', [], function( require, exports, module ) {
	return function( attrs ) {
		var Backbone = require( 'backbone' );
		var TestView = Backbone.View.extend({
			initialize: function(){
				this.on( this.model, 'change', function(){
					this.render();
				});
			},
			render: function(){}
		});
		return new TestView( attrs );
	};
});
