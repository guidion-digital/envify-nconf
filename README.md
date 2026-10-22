# @gdn/envify-nconf

**Deprecated.** This library is no longer maintained. Support has been discontinued.

## How to migrate to the regular way

Read environment variables with Node.js. No extra package is required. See [How to read environment variables from Node.js](https://nodejs.org/learn/command-line/how-to-read-environment-variables-from-nodejs).

If a `.env` file is always present, pass it on the command line:

```bash
node --env-file=.env app.js
```

To run locally with a `.env` file and on GitHub Actions, where GitHub sets the variables and no `.env` file is present, load the file only when it exists. `process.loadEnvFile()` throws if the file is missing.

```js
import { existsSync } from 'node:fs';
import { loadEnvFile } from 'node:process';

if (existsSync('.env')) {
  loadEnvFile();
}
```

```js
const { existsSync } = require('node:fs');
const { loadEnvFile } = require('node:process');

if (existsSync('.env')) {
  loadEnvFile();
}
```

On GitHub Actions the variables are already on `process.env`, so a missing file is skipped and those values are used.

Environment variables are available on `process.env`. Every value is a string.

```js
const port = process.env.PORT;
const nodeEnv = process.env.NODE_ENV;
```

A variable that is not set is `undefined`:

```js
const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error('API_URL is not set');
}
```

Set them when you start the process:

```bash
PORT=3000 NODE_ENV=production node app.js
```

Or export them in the shell first:

```bash
export PORT=3000
node app.js
```

---

# Envify nconf
A ready to use loading to the process.env for nconf.

## Installation

```bash
npm install --save @gdn/envify-nconf

```

You can make use of this library by calling is as soon as possible in your project.
Example:
```js
import { load } from '@gdn/envify-nconf';
// Load config settings
load();
...

```
OR

```js
require('@gdn/envify-nconf').load();
...

```

The .load function has 2 parameters:
1. configFolder: string | Default: process.cwd() + /config
2. branch: string | Optional | default: checks env vars for Travis and CircleCI branches


## Hierarchy and settings
The following settings will be loaded in the following hierarchy:
1. args
2. env
3. local.json
4. {branch}.json
5. default.json

