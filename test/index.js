var tape = require( 'tape' );
var frpPromise = require( './..' );
var promise = require( 'bluebird' );

var resolved = promise.resolve( 'got it' );
var rejected = promise.reject( 'nope dont got it' );
var later = new promise( function( resolve, reject ) {

	setTimeout( resolve.bind( null, 'got it later' ), 1000 );
});

frpPromise( resolved )
.watch( function( value ) {

	console.log( value );
});

frpPromise( rejected )
.watch( function( value ) {

	console.log( value );
});

frpPromise( later )
.watch( function( value ) {

	console.log( value );
});