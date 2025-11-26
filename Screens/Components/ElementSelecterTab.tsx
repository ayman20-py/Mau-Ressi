import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { useState } from 'react';

import styles, { useAppFonts } from '../../Styles/styles';
import { DraggableElement } from './DragableElement';

import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';


export function ElementSelectorTab() {
    const loadFonts = useAppFonts();


    return (
        <View style={styles.elementSelector}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
            >
                <TextElementView />
                <TextElementView />
            </ScrollView>
        </View>
    )
}


function TextElementView() {

    const holdDuration = 200;
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);



    const longPress = Gesture.LongPress()
        .minDuration(holdDuration) // 500 ms to hold the item to drag it.
        .onStart(() => {
            console.log("Posistion X:", translateX.value)
        })
        .onEnd(() => {
            console.log("Ending the draggin of the element");
        });

    const drag = Gesture.Pan().onChange(event =>  {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value }
            ]
        }
    });

    return (
        <GestureDetector gesture={longPress}>
            <Animated.View style={[containerStyle]}>
                <GestureDetector gesture={drag}>
                    <TouchableOpacity style={styles.elementItem}>
                        <Text style={styles.elementItemFont}>Testing Text...</Text>
                    </TouchableOpacity>
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    )
    
}

function TextInputElementView() {
    return (
        <TouchableOpacity style={styles.elementItem}>
            <Text style={styles.elementItemFont}>Text Input Field</Text>
        </TouchableOpacity>
    )
}