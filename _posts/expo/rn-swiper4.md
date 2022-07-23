---
tags: [react-native]
title: rn-swiper4
created: '2022-02-03T12:13:09.183Z'
modified: '2022-06-19T16:05:06.581Z'
---

# rn-swiper4

```js
import React, { useRef } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');
const data = ['brown', 'orange', 'red', 'blue', 'green'];

export default function Swiper4() {
    const scrollValue = useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
                    { useNativeDriver: false },
                )}>
                {data.map(x => (
                    <View style={[styles.card, { backgroundColor: x }]} key={x} />
                ))}
            </ScrollView>
            <View style={styles.indicatorConatiner} pointerEvents="none">
                {data.map((x, i) => (
                    <Indicator x={x} i={i} key={x} scrollValue={scrollValue} />
                ))}
            </View>
        </View>
    );
}

function Indicator({ i, scrollValue }) {
    const translateX = scrollValue.interpolate({
        inputRange: [-width + i * width, i * width, width + i * width],
        outputRange: [-20, 0, 20],
    });
    return (
        <View style={styles.indicator}>
            <Animated.View
                style={[styles.activeIndicator, { transform: [{ translateX }] }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 3
    },
    card: {
        width: width - 10,
        height: '100%',
        marginHorizontal: 5,
        borderRadius: 5,
    },
    indicatorConatiner: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
    },
    indicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#00000044',
        marginHorizontal: 5,
        overflow: 'hidden',
    },
    activeIndicator: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
});

```
