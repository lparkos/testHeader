import { newHeaderPlugin } from './plugin';

describe('new-header', () => {
  it('should export plugin', () => {
    expect(newHeaderPlugin).toBeDefined();
  });
});
