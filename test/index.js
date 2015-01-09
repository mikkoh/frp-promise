var test = require( 'tape' );
var frpPromise = require( './..' );
var promise = require( 'bluebird' );


test( 'test creating frp Event\'s out of promises', function( t ) {

	t.plan( 4 );

	var resolved = promise.resolve( 'got it' );
	var rejected = promise.reject( 'nope dont got it' );
	var later = new promise( function( resolve, reject ) {

		setTimeout( resolve.bind( null, 'got it later' ), 1000 );
	});

	frpPromise( resolved )
	.watch( function( value ) {

		t.equal( value, 'got it', 'received from resolving promise' );
	});

	frpPromise( rejected )
	.watch( function( value ) {

		t.ok( value instanceof Error, 'received an error from rejecting promise' );
		t.equal( value.message, 'nope dont got it', 'error message is the message sent from reject' );
	});

	frpPromise( later )
	.watch( function( value ) {

		t.equal( value, 'got it later', 'received from async resolving promise' );
	});
});