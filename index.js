var frp = require( 'frp' );

module.exports = function( promise ) {

	var pipe = frp.event.pipe();

	promise.then( function( value ) {

		pipe.fire( value );
	}, function( reason ) {

		pipe.fire( new Error( reason ) );
	});

	return pipe;
};