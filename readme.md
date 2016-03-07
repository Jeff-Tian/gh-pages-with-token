# gh-pages-with-token

[![Build Status][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![dependencies][deps-image]][deps-url]
[![devDependencies][depsdev-image]][depsdev-url]

> A small utility to pass a GitHub token in Travis CI.

## Installation

```shell
$ npm i --save-dev gh-pages-with-token
```

## Usage

### package.json

```js
{
  // ...
  "scripts": {
    "deploy": "gh-pages-with-token -d dist"
  }
}
```

## Why?

This is a small utility that will utilize a `GH_TOKEN` environment variable in Travis CI.
It will use this to construct a url that can be pushed to when using the [`gh-pages`](//github.com/tschaub/gh-pages) package. This will set the `-r` flag for you. Any other flags set will be passed along.

## License

Copyright © 2016 [Neil Kistner](//github.com/wyze)

Released under the MIT license. See [license](license) for details.

[travis-image]: https://img.shields.io/travis/wyze/gh-pages-with-token.svg?style=flat-square
[travis-url]: https://travis-ci.org/wyze/gh-pages-with-token

[npm-image]: https://img.shields.io/npm/v/gh-pages-with-token.svg?style=flat-square
[npm-url]: https://npmjs.com/package/gh-pages-with-token

[deps-image]: https://img.shields.io/david/wyze/gh-pages-with-token.svg?style=flat-square
[deps-url]: https://david-dm.org/wyze/gh-pages-with-token

[depsdev-image]: https://img.shields.io/david/dev/wyze/gh-pages-with-token.svg?style=flat-square
[depsdev-url]: https://david-dm.org/wyze/gh-pages-with-token#info=devDependencies
