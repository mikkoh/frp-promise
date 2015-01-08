var test = require( 'tape' );
var frpPromise = require( './..' );
var promise = require( 'bluebird' );


test( 'test creating frp Event\'s out of promises', function( t ) {

	t.plan( 3 );

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

		t.equal( value.message, 'nope dont got it', 'received error from rejecting promise' );
	});

	frpPromise( later )
	.watch( function( value ) {

		t.equal( value, 'got it later', 'received from async resolving promise' );
	});
});