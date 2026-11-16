import { CuAttrDirective } from './cu-attr';

describe('CuAttr', () => {
  it('should create an instance', () => {
    const directive = new CuAttrDirective(null!, null!);
    expect(directive).toBeTruthy();
  });
});
