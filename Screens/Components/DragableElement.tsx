import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../Styles/styles';

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


    return (
        <View> 

        </View>
    )
    
    // Track the position of the element 
}