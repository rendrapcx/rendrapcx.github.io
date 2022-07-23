---
tags: [react-native]
title: Change App Name react-native
created: '2022-01-28T16:53:06.810Z'
modified: '2022-06-19T16:14:59.558Z'
---

# Change App Name react-native

1. `App.json`
   
   ```json
   {
    "name": "SomethingSomething",
    "displayName": "My New App Name"
   }
   ```

2. `Strings.xml` <Android>
   
   ```xml
   <string name="app_name">My New App Name</string>
   ```

3. `info.plist` <Ios>
   
   ```xml
   <key>CFBundleDisplayName</key>
   <string>My New App Name</string>
   ```

4. <Mark>Clean & Rebuild</Mark>
   
   ```bash
   cd android
   ./gradlew clean
   cd ..
   react-native run-android
   ```
