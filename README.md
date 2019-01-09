
# react-native-scaling-utils
[![package version](https://img.shields.io/npm/v/react-native-scaling-utils.svg?style=flat-square)](https://npmjs.org/package/react-native-scaling-utils)
[![package downloads](https://img.shields.io/npm/dm/react-native-scaling-utils.svg?style=flat-square)](https://npmjs.org/package/react-native-scaling-utils)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-native-scaling-utils.svg?style=flat-square)](https://npmjs.org/package/react-native-scaling-utils)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Simple scaling utilities for React Native

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install react-native-scaling-utils
$ # OR
$ yarn add react-native-scaling-utils
```

## Usage

```js
import {
    screenHeight, 
    screenWidth,
    scale,
    isPortrait,
    isLandscape,
    removeDimensionsListener
} from 'react-native-scaling-utils'

console.log(screenHeight)
console.log(screenWidth)
console.log(scale.font(10))
console.log(scale.height(10)) // 10%
console.log(scale.width(50)) // 50%
console.log(isPortrait) 
console.log(isLandscape)
removeDimensionsListener()

```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    