import * as Chai from 'chai';
import { load } from '../env';
import * as path from 'path';

const expect = Chai.expect;
describe('load', () => {
  it('loads the default js.', () => {
    const oldEnv = Object.assign({}, process.env);
    load(path.resolve(__dirname, 'mock/'));
    expect(process.env.testSetting).to.be.equal('Set');
    process.env = oldEnv;
  });
});
