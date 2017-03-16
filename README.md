# Coorpacademy ESLint config

[![Greenkeeper badge](https://badges.greenkeeper.io/CoorpAcademy/eslint-config-coorpacademy.svg)](https://greenkeeper.io/)

This library provides a common ESLint config for all Coorpacademy projects.

It creates a list of recommended rules, which is to be enabled in each project.

## How to add it to the project

```console
npm install --save-dev eslint-config-coorpacademy
```

Create a `.eslintrc` file if you don't already have one, then create/update the `extends` key like the following:
```json
  "extends": [
    "coorpacademy/core",
    "coorpacademy/ava",
    "coorpacademy/..."
  ]
}
```

Available rule sets are:
- [core](./core.js): Core ESLint rules
- [ava](./ava.js): Rules for when using AVA (need to install `eslint-plugin-ava`)
- [es20XX](./es20XX.js): Rules for when using ES2015+ syntax
- [jsx](./jsx.js): Rules for when using ES2015+ syntax (need to install `eslint-plugin-jsx`)
- [mocha](./mocha.js): Rules for when using Mocha (need to install `eslint-plugin-mocha-only`)

## Semantic versioning

To avoid breaking projects using this configuration, these are the rules for versioning:
- **Major**
  - Add new `error` rules in existing configuration files
  - Update `warning` rules to be `error` rules
  - Change options for `error` rules that makes them more restrictive, even partially
- **Minor**
  - Add new configuration files
  - Add new `warning` rules
  - Update `error` rules to be `warning` rules
  - Change options for `error` rules that makes them less restrictive
  - Change options for `warning` rules
  - Disable rules
- **Patch**
  - Anything not mentioned previously (probably) that should not break client projects
