import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../Styles/styles';

import { LongPressGestureHandler, PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import { LongPressGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/longPressGesture';
import { PanGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture';


interface DraggableElementProps{ 
    children: React.ReactNode,
    onDragStart?: () => void;
    onDragEnd?: (position: {x: number, y: number}) => void;
}

export const DraggableElement: React.FC<DraggableElementProps> = ({children, onDragStart, onDragEnd}) => {
    
    // Track the position of the element 
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    // To know if the element is being dragged
    const isDragging = useSharedValue(false);


    const animatedStyle = useAnimatedStyle(() => {
        return {
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
        ],
        opacity: isDragging.value ? 0.8 : 1,
        zIndex: isDragging.value ? 999 : 1,
        };
    });

    // Handle pan gesture
    const onPanGestureEvent = Animated.event(
        [
            {
                nativeEvent: {
                translationX: translateX,
                translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true }
    );

    const onHandlerStateChange = (event: any) => {
        if (event.nativeEvent.state === State.ACTIVE) {
        // Drag started
        isDragging.value = true;
        if (onDragStart) {
            runOnJS(onDragStart)();
        }
        } else if (
        event.nativeEvent.state === State.END ||
        event.nativeEvent.state === State.CANCELLED ||
        event.nativeEvent.state === State.FAILED
        ) {
        // Drag ended
        isDragging.value = false;
        if (onDragEnd) {
            runOnJS(onDragEnd)({
            x: translateX.value,
            y: translateY.value
            });
        }
        }
    };


    return (
        <LongPressGestureHandler
            minDurationMs={500} // How long we need to press the element to activate in milliseconds
            onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === State.ACTIVE) {

                }
            }}
            >
                <Animated.View>
                    <PanGestureHandler onGestureEvent={onPanGestureEvent}>
                        <Animated.View style={animatedStyle}>
                           <TouchableOpacity style={styles.elementItem}>
                                {children}
                            </TouchableOpacity> 
                        </Animated.View>
                    </PanGestureHandler>
                </Animated.View>
        </LongPressGestureHandler>

    );
}