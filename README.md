# `<Avatar />` &middot;  [![npm version](https://img.shields.io/npm/v/react-simple-avatar.svg?style=flat)](https://www.npmjs.com/package/react-simple-avatar)&nbsp;[![Build Status](https://travis-ci.org/iTonyYo/react-simple-avatar.svg?branch=master)](https://travis-ci.org/iTonyYo/react-simple-avatar)&nbsp;[![Coverage Status](https://coveralls.io/repos/github/iTonyYo/react-simple-avatar/badge.svg?branch=master)](https://coveralls.io/github/iTonyYo/react-simple-avatar?branch=master)&nbsp;[![](https://img.shields.io/npm/dm/react-simple-avatar.svg)](https://www.npmjs.com/package/react-simple-avatar)&nbsp;[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contribute)&nbsp;[![Plugins Welcome](https://img.shields.io/badge/Plugins-welcome-brightgreen.svg)](#plugin)

> A simple & flexible component for showing avatar.

`react-simple-avatar` can be easily & highly customized. It just ensure the minimum but the most efficient code. You can use [plugins](#plugin) or write your own avatar layer component to extend it. It's suitable for react, react-router and react redux projects.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Plugin](#plugin)
- [Contribute](#contribute)
- [Alternative](#alternative)
- [Todo](#todo)
- [License](#license)

## Install

```shell
yarn add react-simple-avatar
```

## Usage

> `react-simple-avatar` was built with classnames, radium.

ES6 and CommonJS builds are available with each distribution. For example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterAvatar, LinkAvatar, Initials, Src } from 'react-simple-avatar';

ReactDOM.render(
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
     from='http://placehold.it/58x58'
     style={ {display: 'inline-block'} }
     className='foundation-avatar-src' />
    /*
      or, you can put your own avatar plugin here.
      Maybe it's a layer to show user permissions;
      a loader for avatar; the avatar fetched from
      twitter; an hover effect layer... Who knows
      what else ~
      ...
    */
  </RouterAvatar>,
  document.getElementById('root')
);
```

Or,

```javascript
var React        = require('react');
var ReactDOM     = require('react-dom');
var SimpleAvatar = require('react-simple-avatar');

ReactDOM.render(
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
     from='http://placehold.it/58x58'
     style={ {display: 'inline-block'} }
     className='foundation-avatar-src' />
    /*
      or, you can put your own avatar plugin here.
      Maybe it's a layer to show user permissions;
      a loader for avatar; the avatar fetched from
      twitter; an hover effect layer... Who knows
      what else ~
      ...
    */
  </SimpleAvatar.LinkAvatar>,
  document.getElementById('root')
);
```

## Contribute &middot; [![](https://img.shields.io/gitter/room/react-simple-avatar/react-simple-avatar.svg)](https://gitter.im/react-simple-avatar/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

Use GitHub issues for requests.

See [the contribute files](https://github.com/iTonyYo/react-simple-avatar/tree/master/.github)!

PRs accepted.

## Plugin

Plugins accepted.

## Alternative

If you don’t agree with the choices made in this project, you might want to explore alternatives with different tradeoffs.

Some of the more popular and actively maintained ones are:

- [sitebase/react-avatar](https://www.npmjs.com/package/react-avatar)
- [wbinnssmith/react-user-avatar](https://www.npmjs.com/package/react-user-avatar)

## Todo

- [ ] make it can receive micro data (in the discussion...)
- [ ] make it can receive dataset (in the discussion...)
- [ ] make it more accessible for everyone
- [ ] add doc for introducing accessibility
- [ ] add doc like [`react-canvas`](https://github.com/Flipboard/react-canvas#react-canvas-components) for introducing each (high-order) component
- [ ] add doc for introducing how to build
- [ ] add doc for introducing how to preview the given example in the local
- [ ] add doc for introducing the inspiration(or motivation) for creating this component
- [ ] add doc for introducing how to develop plugin for `react-simple-avatar`
- [ ] tell the advantages
- [ ] provide schematic
- [ ] provide roadmap
- [ ] provide release notes
- [ ] provide changelog
- [ ] provide online preview
- [ ] show the conventions that project followed
- [ ] provide help center(or recipes...)
- [ ] add supported browsers
- [ ] provide umd build
- [ ] add `Thanks` section for some help from articles & developers
- [ ] optimize docs

## License

[MIT © Shen Weizhong](https://github.com/iTonyYo/react-simple-avatar/blob/master/LICENSE).
