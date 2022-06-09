const app = require('../../src/app');

describe('\'documents\' service', () => {
  it('registered the service', () => {
    const service = app.service('documents');
    expect(service).toBeTruthy();
  });
});
