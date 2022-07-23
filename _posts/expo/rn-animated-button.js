/**
 * desc: react native reanimated button
 * filename: 
 * */

import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AnimatedButton() {
    const [count, setCount] = useState(0);
    const animation = useRef(new Animated.Value(0)).current;
    const scale = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.9] });

    const onPressIn = () => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };
    const onPressOut = () => {
        setTimeout(() => {
            Animated.spring(animation, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }, 200);
    };
    const onPress = () => setCount(count + 1);
    return (
        <View style={styles.container}>
            <Text style={styles.count}>{count}</Text>
            <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={1}
                    onPressIn={onPressIn}
                    onPress={onPress}
                    onPressOut={onPressOut}>
                    <Text style={styles.btnText}>COUNTER + 1</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'space-evenly' },
    button: {
        backgroundColor: '#132a5c',
        marginBottom: 20,
        borderRadius: 10,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    btnText: {
        color: '#fff',
        fontSize: 25,
    },
    count: {
        fontSize: 30,
    },
});

