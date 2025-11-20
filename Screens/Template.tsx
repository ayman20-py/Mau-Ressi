import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as React from 'react';

import { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TemplateElement, TextElement, TextInputElement, TemplateSize } from '../LogicControllers/TemplateElements';

import styles, { Colors } from '../Styles/styles';
import { PlusButton } from './Components/PlusButton';

import { Screens } from '../LogicControllers/SystemConstants';



export function TemplatePage() {
    return (
        <ScrollView style={styles.scrollViewProps}>
            {/* View containing both the template canvas, the bottom element list and the top element properties list */}
            <View style={styles.container}>
                <PlusButton text="New Template" routingScreen={Screens.CREATETEMPLATEPAGE}/>
                <Text style={styles.body}>My existing Templates</Text>
            </View>
        </ScrollView>
    )
}
