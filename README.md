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



