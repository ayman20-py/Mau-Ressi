import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';

import styles, { useAppFonts } from '../../Styles/styles';
import { DraggableElement } from './DragableElement';

export function ElementSelectorTab() {
    const loadFonts = useAppFonts();


    return (
        <View style={styles.elementSelector}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
            >
                <TextElementView />

                <DraggableElement 
                    onDragStart={() => {console.log("Drag Started")}}
                    onDragEnd={() => {console.log("Drag ended")}}
                >
                    <TextElementView />


                </DraggableElement>

            </ScrollView>
        </View>
    )
}

function TextElementView() {

    return (
        <TouchableOpacity style={styles.elementItem}>
            <Text style={styles.elementItemFont}>Text...</Text>
        </TouchableOpacity>
    )
    
}

function TextInputElementView() {
    return (
        <TouchableOpacity style={styles.elementItem}>
            <Text style={styles.elementItemFont}>Text Input Field</Text>
        </TouchableOpacity>
    )
}