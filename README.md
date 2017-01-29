# `<Avatar />` &middot;  [![npm version](https://img.shields.io/npm/v/react-simple-avatar.svg?style=flat)](https://www.npmjs.com/package/react-simple-avatar)&nbsp;[![Build Status](https://travis-ci.org/iTonyYo/react-simple-avatar.svg?branch=master)](https://travis-ci.org/iTonyYo/react-simple-avatar)&nbsp;[![Coverage Status](https://coveralls.io/repos/github/iTonyYo/react-simple-avatar/badge.svg?branch=master)](https://coveralls.io/github/iTonyYo/react-simple-avatar?branch=master)&nbsp;[![](https://img.shields.io/npm/dm/react-simple-avatar.svg)](https://www.npmjs.com/package/react-simple-avatar)&nbsp;[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contribute)&nbsp;[![Plugins Welcome](https://img.shields.io/badge/Plugins-welcome-brightgreen.svg)](#plugin)

> A simple component for showing avatar.

`react-simple-avatar` can be easily & highly customized. It just ensure the minimum but the most efficient code. You can use [plugins](#plugin) or write your own avatar layer component to extend it. It's suitable for react, react-router and react redux projects.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Plugin](#plugin)
- [Contribute](#contribute)
- [Todo](#todo)
- [License](#license)

## Install

```shell
yarn add react-simple-avatar
```

## Usage

> `react-simple-avatar` was built with classnames, radium.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterAvatar, LinkAvatar, Initials, Src } from 'react-simple-avatar';
import FullCanvas from 'react-fullcanvas';
import svgAvatar from './assets/img/avatar.svg';

ReactDOM.render(
  <FullCanvas className='example'>
    <RouterAvatar
     to='#'
     alt='沈维忠'
     size={ 58 }
     style={ {color: '#000'} }
     className='foundation-avatar round-box-5px border-2px'>
      <Initials
       text='沈'
       size={ 30 }
       style={ {color: '#f00'} }
       className='foundation-avatar-initials' />
      <Src
       from={ svgAvatar }
       style={ {display: 'inline-block'} }
       className='foundation-avatar-src' />
      /*
        or, you can put your own avatar plugin here.
        Maybe it's a layer to show user permissions;
        a loader for avatar; the avatar fetched from
        twitter... Who knows what else ~
        ...
      */
    </RouterAvatar>
  </FullCanvas>,
  document.getElementById('root')
);
```

Or,

```javascript
var React        = require('react');
var ReactDOM     = require('react-dom');
var SimpleAvatar = require('react-simple-avatar');
var FullCanvas   = require('react-fullcanvas');
var svgAvatar    = require('./assets/img/avatar.svg');

ReactDOM.render(
  <FullCanvas className='example'>
    <SimpleAvatar.LinkAvatar
     to='#'
     alt='沈维忠'
     size={ 58 }
     style={ {color: '#000'} }
     className='foundation-avatar round-box-5px border-2px'>
      <SimpleAvatar.Initials
       text='沈'
       size={ 30 }
       style={ {color: '#f00'} }
       className='foundation-avatar-initials' />
      <SimpleAvatar.Src
       from={ svgAvatar }
       style={ {display: 'inline-block'} }
       className='foundation-avatar-src' />
      /*
        or, you can put your own avatar plugin here.
        Maybe it's a layer to show user permissions;
        a loader for avatar; the avatar fetched from
        twitter... Who knows what else ~
        ...
      */
    </SimpleAvatar.LinkAvatar>
  </FullCanvas>,
  document.getElementById('root')
);
```

## Plugin

Plugins accepted.

## Contribute

See [the contribute files](https://github.com/iTonyYo/react-simple-avatar/tree/master/.github)!

PRs accepted.

## Todo

- [ ] remove the special characters in description
- [ ] add micro data
- [ ] add doc for introducing how to build
- [ ] optimize docs

## License

[MIT © Shen Weizhong](https://github.com/iTonyYo/react-simple-avatar/blob/master/LICENSE).
