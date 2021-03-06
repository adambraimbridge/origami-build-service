'use strict';

const sinon = require('sinon');
require('sinon-as-promised');

const ModuleInstallation = (module.exports = sinon.stub());

const mockModuleInstallation = {
    listDirectNoneOrigamiComponents: sinon.stub().resolves([]),
    listAllOrigamiComponents: sinon.stub().resolves([]),
};

ModuleInstallation.returns(mockModuleInstallation);
