wp.customize.controlConstructor['kirki-radio-buttonset'] = wp.customize.Control.extend({

	// When we're finished loading continue processing
	ready: function() {

		'use strict';

		var control = this;

		// Add to the queue.
		kirkiControlLoader( control );
	},

	initKirkiControl: function() {

		'use strict';

		var control = this;

		// Change the value
		this.container.on( 'click', 'input', function() {
			control.setting.set( jQuery( this ).val() );
		});
	}
});
