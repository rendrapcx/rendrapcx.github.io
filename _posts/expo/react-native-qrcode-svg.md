---
tags: [react-native]
title: react-native-qrcode-svg
created: '2022-01-28T09:39:30.567Z'
modified: '2022-06-19T16:05:49.441Z'
---

# react-native-qrcode-svg

```bash
npm i react-native-qrcode-svg
```

```javs
import QRCode from 'react-native-qrcode-svg';

// Simple usage, defaults for all but the value
render() {
  return (
    <QRCode
      value="http://awesome.link.qr"
    />
  );
};
```

```js
// 30px logo from base64 string with transparent background
render() {
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    <QRCode
      value="Just some string value"
      logo={{uri: base64Logo}}
      logoSize={30}
      logoBackgroundColor='transparent'
    />
  );
};
```
