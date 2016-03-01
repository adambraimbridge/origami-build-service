'use strict';

const createRouteHandler = require('../express/promisehandler');

module.exports = function(app, config) {
	const buildSystem = config.buildSystem;

	// Install routes
	app.get(/^\/files\/[^\/]+\//, createRouteHandler(bundleFile));
	app.get(/^\/v1\/files\/[^\/]+\//, createRouteHandler(bundleFile));
	app.get(/^\/v2\/files\/[^\/]+\//, createRouteHandler(bundleFile));

	// Handlers
	function bundleFile(req, res) {
		return buildSystem.outputFile(req, res);
	}

};