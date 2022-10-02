---
title: Cara Install paket NPM
author: rendrapcx
date: 2022-07-26 18:38:43 +0700
categories: [Node, NPM]
tags: [install]
---

### NPM Install with Peer Dependencies

![https://i.imgur.com/x4htXvx.png](https://i.imgur.com/x4htXvx.png)

![npm-peer-dependencies](https://i.imgur.com/x4htXvx.png){: w="700" h="400" }

```sh
npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
npm install @mui/icons-material --legacy-peer-deps
```

### Install from lock
```
npm ci
```

### Install dari github clone
> rekomen pake yang `npm ci` aja
```
npm install
```

