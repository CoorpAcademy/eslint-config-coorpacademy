# Coorpacademy ESLint config

This library provides a common ESLint config for all Coorpacademy projects.

It creates a list of recommended rules, which is to be enabled in each project.

## How to add it to the project

```console
npm install --save-dev @coorpacademy/eslint-config-coorpacademy
```

Create a `.eslintrc` file if you don't already have one, then create/update the `extends` key like the following (only take what is appropriate):

```json
{
  "...": "...",
  "extends": [
    "coorpacademy",
    "coorpacademy/ava",
    "coorpacademy/mocha"
  ],
  "...": "..."
}
```

## Semantic versioning

To avoid breaking projects using this configuration, these are the rules for versioning:
- **Major**
  - Add new `error` rules
  - Update `warning` rules to be `error` rules
  - Change options for `error` rules that makes them more restrictive, even partially
- **Minor**
  - Add new `warning` rules
  - Update `error` rules to be `warning` rules
  - Change options for `error` rules that makes them less restrictive
  - Change options for `warning` rules
  - Disable rules
- **Patch**
  - Anything not mentioned previously (probably)
