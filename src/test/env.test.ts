import { expect } from 'chai';
import { load } from '../env';
import { resolve } from 'path';

const oldEnv = Object.assign({}, process.env);
describe('load', () => {
  afterEach(() => {
    process.env = Object.assign({}, oldEnv);
  });

  it('loads the default js.', () => {
    load(resolve(__dirname, 'mock/'));
    expect(process.env.testSetting).to.be.equal('Set');
  });

  it('loads the default js and a branch js and branch config file overrules default setting.', () => {
    load(resolve(__dirname, 'mock/'), 'testbranch');
    expect(process.env.testSetting).to.be.equal('test branch yo');
  });

  it('gives no error with invalid path.', () => {
    load('');
  });
});
