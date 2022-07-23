---
tags: [snippets]
title: RN IMAGE
created: '2022-06-14T17:02:21.328Z'
modified: '2022-07-01T00:26:05.930Z'
---

# RN IMAGE

**index.js**
```js
const IMAGE = {
  USER_PROFILE: require('../images/avatar/user.png'),
  LOGO: require('../images/logo/react.png'),
  HERO: require('../images/hero/1004-5616x3744.jpg'),
  SPLASH: require('../images/splash/splash.png'),
};
export {IMAGE};
```

## Usage
```js
import {IMAGE} from '../asssets/images';

...
<Image source={IMAGE.USERPROFILE} />
```








