define( 'view.monopoly-player', [ 'backbone' ], function( Backbone ) {
	return function( attrs ) {
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
