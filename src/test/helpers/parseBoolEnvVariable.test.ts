import { expect } from 'chai';
import { parseBoolEnvVariable } from '../../helpers';

describe('parseBoolEnvVariable', () => {
  it('returns defaultValue false on undefined', () => {
    expect(parseBoolEnvVariable(undefined, false)).to.be.equal(false);
  });

  it('returns defaultValue true on undefined', () => {
    expect(parseBoolEnvVariable(undefined, true)).to.be.equal(true);
  });

  it('returns true on "true"', () => {
    expect(parseBoolEnvVariable('true', false)).to.be.equal(true);
  });

  it('returns false on unknown string', () => {
    expect(parseBoolEnvVariable('dsajdsak', true)).to.be.equal(false);
  });

  it('throws error on boolean input', () => {
    // @ts-ignore
    expect(() => parseBoolEnvVariable(true, true)).Throw();
  });
});
