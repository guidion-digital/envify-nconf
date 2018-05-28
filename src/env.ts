import * as path from 'path';
import * as nconf from 'nconf';

function load(rootPath?: string) {
  if (!rootPath) {
    rootPath = process.cwd();
  }
  const branch = process.env.TRAVIS_PULL_REQUEST_BRANCH || process.env.TRAVIS_BRANCH;

  console.log(path.join(rootPath, `/local.json`));
  process.env = nconf.argv()
    .env()
    .file('local', {file: path.join(rootPath, `/local.json`)})
    .file('branch', {file: path.join(rootPath, `/${branch}.json`)})
    .file('defaults', {file: path.join(rootPath, '/default.json')})
    .get();
}

export {load};
