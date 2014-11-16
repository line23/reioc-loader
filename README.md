### Installation

```
$ npm install reioc-loader
```
### How to use

This implementation is based on the reioc module.

First you need to configure reioc-loader with 'rootPath' and 'namespaces'. This configuration must be inside app.js top-level file, and must be make it before loading any module with reioc-loader.

```javascript
var config = {
	rootPath: __dirname,
  namespaces:{
    // Namespace: { path: path/to/modules/folder }
    services: { path: 'services/test'}
  }
};
require('reioc-loader').config(config);

// get TestService
var TestService = new require('reioc-loader')
				.get('services/testService')();
// where 'services/testService' === __dirname + '/' + config.namespaces['services'] + '/' + testService.js ===
// __dirname + '/' + services/test + '/' + testService.js
```

inside /services/test/testService.js:

```javascript
var FooService = new require('reioc-loader').get('services/fooService')();

var TestService = function(settings) {
	// use FooService
};

module.exports = TestService;
```
/services/test/fooService.js:

```javascript
var FooService = function() {
  // omitted for brevity
};
module.exports = FooService;
```
