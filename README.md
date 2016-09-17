<big><h1 align="center">(Work In Progress) glamor-plugin-detect-component</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/glamor-plugin-detect-component">
    <img src="https://img.shields.io/npm/v/glamor-plugin-detect-component.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/vdanchenkov/glamor-plugin-detect-component">
    <img src="https://img.shields.io/coveralls/vdanchenkov/glamor-plugin-detect-component.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/vdanchenkov/glamor-plugin-detect-component">
    <img src="https://img.shields.io/travis/vdanchenkov/glamor-plugin-detect-component.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/glamor-plugin-detect-component">
    <img src="http://img.shields.io/npm/dm/glamor-plugin-detect-component.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/vdanchenkov/glamor-plugin-detect-component.svg">
    <img src="https://david-dm.org/vdanchenkov/glamor-plugin-detect-component.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/vdanchenkov/glamor-plugin-detect-component/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/glamor-plugin-detect-component.svg?style=flat-square"
         alt="License">
  </a>
</p>

<p align="center"><big>

</big></p>


## Install

```sh
npm install -S glamor-plugin-detect-component
```

## Usage

```js
import detectComponent from "glamor-plugin-detect-component"
import { plugins } from 'glamor'

if (process.env.NODE_ENV === 'development') { 
  plugins.add(detectComponent())
}
```

## License

MIT © [Vladimir Danchenkov](http://github.com/vdanchenkov)

[npm-url]: https://npmjs.org/package/glamor-plugin-detect-component
[npm-image]: https://img.shields.io/npm/v/glamor-plugin-detect-component.svg?style=flat-square

[travis-url]: https://travis-ci.org/vdanchenkov/glamor-plugin-detect-component
[travis-image]: https://img.shields.io/travis/vdanchenkov/glamor-plugin-detect-component.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/vdanchenkov/glamor-plugin-detect-component
[coveralls-image]: https://img.shields.io/coveralls/vdanchenkov/glamor-plugin-detect-component.svg?style=flat-square

[depstat-url]: https://david-dm.org/vdanchenkov/glamor-plugin-detect-component
[depstat-image]: https://david-dm.org/vdanchenkov/glamor-plugin-detect-component.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/glamor-plugin-detect-component.svg?style=flat-square
