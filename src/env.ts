import {join} from 'path';
import {argv} from 'nconf';

export const load = (
  configFolder: string = `${process.cwd()}/config`,
  branch: string = process.env.TRAVIS_PULL_REQUEST_BRANCH || process.env.TRAVIS_BRANCH
) => {
  process.env = argv()
    .env()
    .file('local', {file: join(configFolder, `/local.json`)})
    .file('branch', {file: join(configFolder, `/${branch}.json`)})
    .file('defaults', {file: join(configFolder, '/default.json')})
    .get();
};
