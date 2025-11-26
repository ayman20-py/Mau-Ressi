import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../Styles/styles';
import { useState } from 'react';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import { LongPressGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/longPressGesture';
import { PanGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture';


interface DraggableElementProps{ 
    children: React.ReactNode,
    onDragStart?: () => void;
    onDragEnd?: (position: {x: number, y: number}) => void;
}

export const DraggableElement: React.FC<DraggableElementProps> = ({children, onDragStart, onDragEnd}) => {

    const [position, setPosition] = useState({x: 0, y: 0});
    const [isDragging, setIsDragging] = useState(false);

    // Combined long press andpan gesture
    const gesture = Gesture.LongPress()
        .minDuration(500)
        .onStart(() => {
            setIsDragging(true);
        })
        .onEnd(() => {
            setIsDragging(false);
        });

    const panGesture = Gesture.Pan()
        .onUpdate((event) => {
            if (isDragging) {
                setPosition({
                    x: event.translationX,
                    y: event.translationY
                });
            }
        })
        .onEnd(() => {
            setPosition({ x: 0, y: 0 });
        });

        // Combine getures to work together
        const composed = Gesture.Simultaneous(gesture, panGesture);


    return (
        <GestureDetector gesture={composed}>
            <View style={
                [
                    {
                        transform: [
                            { translateX: position.x },
                            { translateY: position.y }
                        ]
                    },
                    isDragging && { opacity: 0.8 }
                ]}
            >
                {children}
            </View>
        </GestureDetector>
    )
    
    // Track the position of the element 
}