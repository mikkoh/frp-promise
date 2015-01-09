var promise = require( 'bluebird' );
var frpPromise = require( './..' );

var resolving = promise.resolve( 'I am good' );
var rejecting = promise.reject( 'I am bad' );

frpPromise( resolving )
.watch( onWatch );

frpPromise( rejecting )
.watch( onWatch );

function onWatch( value ) {
	
	if( value instanceof Error ) {

		throw value; // will throw an Error with the message value of 'I am bad'
	} else {

		console.log( value ); // will console.log 'I am good'
	}
}