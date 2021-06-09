# Nuxt VWO [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url] 
> Add VWO to your nuxt.js application.

**Note:** VWO is not enabled in dev mode.

You can set environment variable `NODE_ENV` to `production` for testing in dev mode.

## Setup
- Add `@netsells/nuxt-vwo` dependency using yarn or npm to your project
- Add `@netsells/nuxt-vwo` to `modules` section of `nuxt.config.js`

```js
modules: [
    ['@netsells/nuxt-vwo', { 
        accountId: 1234,
        settingsTolerance: 1234, // Optional
        libraryTolerance: 1234, // Optional
    }],
]
```

## Options

### `accountId`
- Required
- VWO Account ID

### `settingsTolerance`
- VWO `settings_tolerance` value
- Default: `2000`

### `libraryTolerance`
- VWO `library_tolerance` value
- Default: `5000`

## License

MIT © [Netsells](https://netsells.co.uk)

[npm-image]: https://badge.fury.io/js/%40netsells%2Fnuxt-vwo.svg
[npm-url]: https://npmjs.org/package/@netsells/nuxt-vwo
[travis-image]: https://travis-ci.org/netsells/nuxt-vwo.svg?branch=master
[travis-url]: https://travis-ci.org/netsells/nuxt-vwo
[daviddm-image]: https://david-dm.org/netsells/nuxt-vwo.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/netsells/nuxt-vwo
[coveralls-image]: https://coveralls.io/repos/netsells/nuxt-vwo/badge.svg
[coveralls-url]: https://coveralls.io/r/netsells/nuxt-vwo
