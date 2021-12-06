import { appendFileSync, existsSync, mkdirSync } from 'fs';

const configFolder: string = `${process.cwd()}/config`;
const indexJSFile: string = `${process.cwd()}/config/export.js`;
const defaultJSONFile: string = `${process.cwd()}/config/default.json`;
const localJSONFile: string = `${process.cwd()}/config/local.json`;

if (!existsSync(configFolder)) {
  mkdirSync(configFolder);
}

if (!existsSync(indexJSFile)) {
  appendFileSync(indexJSFile,
    `require('@gdn/envify-nconf').load();

module.exports = () => process.env;
`);
}

if (!existsSync(defaultJSONFile)) {
  appendFileSync(defaultJSONFile,
    `{

}`);
}

if (!existsSync(localJSONFile)) {
  appendFileSync(localJSONFile,
    `{

}`);
}
