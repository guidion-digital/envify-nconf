import {join} from 'path';
import {argv} from 'nconf';

export const load = (
  configFolder: string = `${process.cwd()}/config`,
  branch?: string
) => {
  const supportedEnvVariables = ['BRANCH', 'TRAVIS_PULL_REQUEST_BRANCH', 'TRAVIS_BRANCH', 'CIRCLE_BRANCH'].filter((name) => process.env[name]);
  const _branch = branch || process.env[supportedEnvVariables[0]];
  process.env = argv()
    .env()
    .file('local', {file: join(configFolder, `/local.json`)})
    .file('branch', {file: join(configFolder, `/${_branch}.json`)})
    .file('defaults', {file: join(configFolder, '/default.json')})
    .get();
};
