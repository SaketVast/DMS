const app = require('../../src/app');

describe('\'fields\' service', () => {
  it('registered the service', () => {
    const service = app.service('fields');
    expect(service).toBeTruthy();
  });
});
