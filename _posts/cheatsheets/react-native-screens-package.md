---
tags: [react-native]
title: react-native-screens-package
created: '2022-01-28T09:18:19.869Z'
modified: '2022-06-19T16:05:49.046Z'
---

# react-native-screens-package

react-native-screens package requires one additional configuration step to properly work on Android devices. Edit `MainActivity.java` file which is located in `android/app/src/main/java/<your package name>/MainActivity.java`.

Add the following code to the body of `MainActivity` class:

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

and make sure to add an `import` statement at the top of this file:
```
import android.os.Bundle;
```

This change is required to avoid crashes related to View state being not persisted consistently across Activity restarts.


