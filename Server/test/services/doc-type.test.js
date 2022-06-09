const app = require('../../src/app');

describe('\'docType\' service', () => {
  it('registered the service', () => {
    const service = app.service('doc-type');
    expect(service).toBeTruthy();
  });
});
