# ts-site-generator

![npm](https://img.shields.io/npm/v/ts-site-generator.svg) ![license](https://img.shields.io/npm/l/ts-site-generator.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/ts-site-generator.svg)



![nodei.co](https://nodei.co/npm/ts-site-generator.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/ts-site-generator.svg)
![stars](https://img.shields.io/github/stars/wspecs/ts-site-generator.svg)
![forks](https://img.shields.io/github/forks/wspecs/ts-site-generator.svg)

![forks](https://img.shields.io/github/forks/wspecs/ts-site-generator.svg)

![](https://david-dm.org/wspecs/ts-site-generator/status.svg)
![](https://david-dm.org/wspecs/ts-site-generator/dev-status.svg)

## Features

- Parse text with chords

## Usage

### Config
```json
// .generator-config.json
{
  "author": {
    "name": "Wendly Saintil",
    "email": "wendlysaintil@gmail.com",
    "url": "https://twitter.com/wendlysaintil"
  },
  "repository": "wspecs"
}

```

```bash
npm i -g ts-site-generator

# to generate template.
ts-site-generator new-package-name -c generator-config.json
```

## Install

`npm i --g ts-site-generator`


## Scripts

 - **npm run build** : `rm -rf dist && tsc`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[commander](https://www.npmjs.com/package/commander) | ^2.15.1 | ✖
[great-logs](https://www.npmjs.com/package/great-logs) | 0.0.4 | ✖
[replace](https://www.npmjs.com/package/replace) | ^1.0.0 | ✖
[shelljs](https://www.npmjs.com/package/shelljs) | ^0.8.2 | ✖
[@types/node](https://www.npmjs.com/package/@types/node) | ^10.0.2 | ✔
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.0 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.1.1 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains TypeScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Wendly Saintil <wendlysaintil@gmail.com> author.url

## License

 - **MIT** : http://opensource.org/licenses/MIT