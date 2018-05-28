import * as path from 'path';
import * as nconf from 'nconf';

function load(configFolder: string) {
  const branch = process.env.TRAVIS_PULL_REQUEST_BRANCH || process.env.TRAVIS_BRANCH;

  process.env = nconf.argv()
    .env()
    .file('local', {file: path.join(configFolder, `/local.json`)})
    .file('branch', {file: path.join(configFolder, `/${branch}.json`)})
    .file('defaults', {file: path.join(configFolder, '/default.json')})
    .get();
}

export {load};
