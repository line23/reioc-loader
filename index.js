var path = require('path');
var ReiocLoader = function(){

	// private
	// -------------------------------------------------------
	var _settings = {};
	var _buildPathToModule = function(namespace, moduleName){
		if(_settings.namespaces && _settings.namespaces[namespace]){
			var modulePath = _settings.namespaces[namespace].path;
			return path.join(_settings.rootPath, modulePath, moduleName);
		}else{
			throw new Error("Reioc-loader:Missing namespace:" + namespace + " inside config!");
		}
	};

	// public
	// -------------------------------------------------------
	var get = function(serviceName) {
		// split namespace and module's name
		var pathArr    = serviceName.split('/');
		// get module's name
		var moduleName = pathArr.pop();
		// get namespace
		var namespace  = pathArr.join('/');

		//require module
		return require(_buildPathToModule(namespace, moduleName));
	};

	var config = function(settings){
		_settings = settings;
	};

	return Object.freeze({
		get: get,
		config: config
	});
};

module.exports = ReiocLoader();