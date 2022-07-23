---
tags: [react-native]
title: react-native-dotenv
created: '2022-01-17T16:17:41.475Z'
modified: '2022-06-19T16:05:49.504Z'
---

# react-native-dotenv
https://www.npmjs.com/package/react-native-dotenv

```
expo install react-native-dotenv
```

**`babel.config.js`**
```json
{
  "plugins": [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
    }]
  ]
}
```

**`.env`**
```
API_URL=https://api.example.org
API_TOKEN=abc123
DEV_BACKEND_URL=http://192.168.100.5:8000/api
PROD_BACKEND_URL=http://192.168.100.5:8000/api
```

**`users.js`**
```javascript
import {API_URL, API_TOKEN} from "@env"

fetch(`${API_URL}/users`, {
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})
```
