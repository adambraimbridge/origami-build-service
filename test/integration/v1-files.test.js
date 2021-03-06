'use strict';

const request = require('supertest');

describe('GET /v1/files', function() {
	this.timeout(20000);
	this.slow(5000);

	describe('when a valid module and file path are requested', function() {
		const moduleName = 'o-test-component@1.0.13';
		const pathName = 'readme.md';

		beforeEach(function() {
			this.request = request(this.app)
				.get(`/v1/files/${moduleName}/${pathName}`)
				.set('Connection', 'close');
		});

		it('should respond with a 301 status', function(done) {
			this.request.expect(301).end(done);
		});

		it('should response with a year long surrogate cache control header', function(done) {
			this.request
				.expect('Surrogate-Control', 'public, max-age=31536000, stale-while-revalidate=31536000, stale-if-error=31536000')
				.end(done);
		});

		it('should respond with a v2 `Location` header', function(done) {
			this.request.expect('Location', `/v2/files/${moduleName}/${pathName}`).end(done);
		});

	});

});
