const app = require('../../src/app');

describe('\'departments\' service', () => {
  it('registered the service', () => {
    const service = app.service('departments');
    expect(service).toBeTruthy();
  });
});
