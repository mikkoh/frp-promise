# frp-promise

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

will convert a Promise to a frp event. If the promise reject's a Javascript `Error` will be returned with the rejecting message.

## Usage

[![NPM](https://nodei.co/npm/frp-promise.png)](https://www.npmjs.com/package/frp-promise)

### Example:
```javascript
var promise = require( 'bluebird' );
var frpPromise = require( 'frp-promise' );

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
```

## License

MIT, see [LICENSE.md](http://github.com/mikkoh/frp-promise/blob/master/LICENSE.md) for details.
