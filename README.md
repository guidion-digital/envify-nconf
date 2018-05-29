# Envify nconf
A ready to use loading to the process.env for nconf.

## Installation

```bash
npm install --save @gdn/envify-nconf

```

You can make use of this library by calling is as soon as possible in your project.
Example:

```js
require('@gdn/envify-nconf').load(__dirname + '/config/');
...

```

The .load function has 2 parameters:
1. configFolder: string
2. branch: string | Optional | default: process.env.TRAVIS_BRANCH if set


## Hierarchy and settings
The following settings will be loaded in the following hierarchy:
1. args
2. env
3. local.json
4. {branch}.json
5. default.json



