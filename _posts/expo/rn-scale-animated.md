---
tags: [react-native]
title: rn-scale-animated
created: '2022-02-05T07:59:49.894Z'
modified: '2022-06-19T16:05:07.051Z'
---

# rn-scale-animated

```js
import React, { useRef, useState } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const boxWidth = 100;

export default function ScaleAnimated() {
    const scale = useRef(new Animated.Value(1)).current;
    const [scaled, setScaled] = useState(false);
    const animate = () => {
        Animated.spring(scale, {
            toValue: scaled ? 1 : 2,
            useNativeDriver: true,
        }).start();
        setScaled(!scaled);
    };
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, { transform: [{ scale }] }]} />
            <View style={styles.btn}>
                <Button onPress={animate} title={scaled ? 'Scale out' : 'Scale in'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
    },
    box: {
        height: boxWidth,
        width: boxWidth,
        backgroundColor: '#348200',
        alignSelf: 'center',
    },
    btn: {
        paddingHorizontal: 50,
    },
});

```
