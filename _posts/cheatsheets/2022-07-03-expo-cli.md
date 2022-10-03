---

title: Expo Cli
author: rendrapcx
date: 2022-07-03 00:43:50 +0700
categories: [Notes, Cheatsheet, Expo]
tags: [cheatsheet, windows-11]
pin: false

---

## What is?

## Setting Development Environment

### Requirements:

- Nodejs
- Git

### Recomended Tools

- Vscode
- vscode expo extension
- yarn
- powershell, bash via wsl

### Installing Expo CLI

```powershell
npm install -g expo-cli
```

- verify (*optional*)

  ```powershell
  expo whoami
  expo login
  ```

- expo sharp-cli for web version (*optional*)

  ```powershell
  npm install -g sharp-cli
  npx expo-optimize
  ```

## Create New App

- Initial project

  ```powershell
  npx create-expo-app learn-expo-app && cd learn-expo-app
  ```

- other way:

  ```powershell
  expo init learn-expo-app
  cd learn-expo-app
  npm run start # you can also use: npx expo start
  ```

## Running App

### Jalankan runtime

```
expo start
```

> lihat di `package.json`, pada bagian `scripts` ada perintahnya, bisa di custom juga. pake `npx` depannya kalo gagal
> {: .prompt-tip }

### buka di android studio emulator

> setelah run expo start, tekan <kbd>Shift + A</kbd> untuk memilih emulator yang terinstall

jika belum install android studio, [^install]

### buka di hape android

1. bisa langsung lewat wifi
2. bisa lewat usb debuging

### buka dengan `scrcpy`

dengan android yang di mirroring ke PC bisa juga digunakan jadi emulator.

## Re-struktur agar mudah dalam pembelajaran

> Membuat beberapa project dalam satu workspace, misal folder `src` dan `prod` untuk dua project yang berbeda
> {: .prompt-tip }

```
.
├── App.js
├── app.json
├── assets
├── babel.config.js
├── node_modules
├── package-lock.json
├── package.json
├── prod
│   ├── ProdApp.js
│   ├── components
│   └── screens
│       └── HomeScreens.js
├── src
│   ├── DevApp.js
│   └── screens
│       └── HomeScreens.js
```

> Cara manggilnya nanti mainin komentar aja di `app.js` nya
> {: .prompt-tip }

```javascript
import ProdApp from "./prod/ProdApp";
// import DevApp from "./src/DevApp";

export default function App() {
  return (
    <ProdApp />
    // <DevApp />
  );
}
```

[^install]: Cara Install Emulator dengan Android Studio


## Common Packages
> paket yang umum biasa saya pake
```
expo install @react-navigation/native

expo install react-native-screens
expo install react-native-safe-area-context
```

```
expo install @react-navigation/stack
```

```
expo install @react-navigation/drawer
expo install react-native-gesture-handler
expo install react-native-reanimated
```

```
expo install @react-navigation/bottom-tabs
expo install @react-navigation/material-bottom-tabs
expo install @react-navigation/material-top-tabs

expo install react-native-tab-view
expo install react-native-pager-view

expo install react-native-paper

expo install react-native-vector-icons
```

```
expo install @react-native-async-storage/async-storage
expo install react-native-dotenv
expo install axios
```
