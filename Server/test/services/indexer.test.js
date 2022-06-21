const app = require('../../src/app');

describe('\'indexer\' service', () => {
  it('registered the service', () => {
    const service = app.service('indexer');
    expect(service).toBeTruthy();
  });
});
