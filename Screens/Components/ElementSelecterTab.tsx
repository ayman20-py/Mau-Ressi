import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { useState } from 'react';

import styles, { useAppFonts } from '../../Styles/styles';
import { DraggableElement } from './DragableElement';

import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { TextElement } from '../../LogicControllers/TemplateElements';


export function ElementSelectorTab() {
    const loadFonts = useAppFonts();


    return (
        <View style={styles.elementSelector}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
            >
                <TextElementView id="T001" type="text" x={0} y={0} width={0} height={0}/>
                <TextElementView id="T002" type="text" x={0} y={0} width={0} height={0}/>
            </ScrollView>
        </View>
    )
}


function TextElementView({id, x, y, width, height}: TextElement) {

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    // For the sake of having a press function
    const longPress = Gesture.LongPress();

    // Dragging function
    const drag = Gesture.Pan().onChange(event =>  {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    })
    .onEnd(() => {
        translateX.value = 0; // Making every component going back to their original place in the ElementSelectorTab
        translateY.value = 0;
    })
    ;

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