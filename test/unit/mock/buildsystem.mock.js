'use strict';

const sinon = require('sinon');
require('sinon-as-promised');

const buildSystem = module.exports = sinon.stub();

buildSystem.defaultExport = sinon.stub();
buildSystem.httpProxyTtl = sinon.stub();
buildSystem.installationManager = sinon.stub();
buildSystem.bundler = sinon.stub();
buildSystem.fileProxy = sinon.stub();
buildSystem.moduleMetadata = sinon.stub();
buildSystem.outputBundle = sinon.stub();
buildSystem.outputModuleMetadata = sinon.stub().resolves();
buildSystem.outputFile = sinon.stub();

buildSystem.returns({
	defaultExport: buildSystem.defaultExport,
	httpProxyTtl: buildSystem.httpProxyTtl,
	installationManager: buildSystem.installationManager,
	bundler: buildSystem.bundler,
	fileProxy: buildSystem.fileProxy,
	moduleMetadata: buildSystem.moduleMetadata,
	outputBundle: buildSystem.outputBundle,
	outputModuleMetadata: buildSystem.outputModuleMetadata,
	outputFile: buildSystem.outputFile
});
