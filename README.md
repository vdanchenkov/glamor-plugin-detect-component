<big><h1 align="center">glamor-plugin-detect-component</h1></big>

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
import { plugins } from 'glamor'
if (process.env.NODE_ENV == 'development') {
  const extractToComment = require('glamor-plugin-extract-to-comment').default
  const detectComponent = require('glamor-plugin-detect-component').default

  plugins.add(extractToComment('GlamorComponent', true))
  plugins.add(detectComponent())
}
const App = require('./components/App').default
```

This plugin detects component where style is defined and adds it's name to 'GlamorComponent' style property. It will show up as `-glamor-component` in final stylesheet.

Detection is done via stack trace. By default only file name is used. You can pass formatter function to configure it. Default implementaion is:

```jsx
plugins.add(detectComponent((fileName, functionName) => {
  const match = /([^/]*?)(?:\/index.js)?\??$/.exec(fileName)
  return match ? match[1] : null
})
``` 

It is best to use [glamor-plugin-extract-to-comment](https://www.npmjs.com/package/glamor-plugin-extract-to-comment) plugin for better readability. In snippet above it extracts GlamorComponent and removes it from style object. Take a note that glamor plugins execute in reverse order. Last added plugin will run first.

## Chrome Canary
Latest version of Chrome Canary implements tail call optimization. It prevents component detection for root elements of your components. 

If your setup is basen on [this instructions](https://github.com/threepointone/glamor/blob/master/docs/createElement.md), you can disable optimization with this trick in .babelrc 

 ```js
 "env": {
   "development": {
     "plugins": [
       [
         "transform-react-jsx",
         { "pragma": "Glamor._NIL=Glamor.createElement" }
       ]
     ]
   }
 }
 ```

Glamor._NIL is just a random identifier. Key is to add assignment of function result to prevent optimization. 

It will render to weird but correct code:

```js
var App = function App() {
  return Glamor._NIL=Glamor.createElement(
    'div',
    _extends({ css: css }, (0, _glamor.hover)({ color: 'red' })),
    Glamor._NIL=Glamor.createElement(_OtherComponent2.default, null)
  );
};
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
