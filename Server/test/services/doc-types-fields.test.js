const app = require('../../src/app');

describe('\'docTypesFields\' service', () => {
  it('registered the service', () => {
    const service = app.service('doc-types-fields');
    expect(service).toBeTruthy();
  });
});
