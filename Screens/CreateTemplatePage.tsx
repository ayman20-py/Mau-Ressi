import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import styles, { useAppFonts} from '../Styles/styles';

import { ElementSelectorTab } from './Components/ElementSelecterTab';

export function CreateTemplatePage() {
    const loadFonts = useAppFonts();
    if (!loadFonts) {
        return (
            <View style={[styles.createTemplateMainContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading fonts...</Text>
            </View>
        );
    }
    return (
        <View style={styles.createTemplateMainContainer}>

            {/* Contains the top element properties tab */}
            <View style={styles.propertiesTab}>
                <Text style={styles.body}>Element Properties Tab</Text>
            </View>

            {/* Contains the template canvas */}
            <View style={styles.createTemplateCanvas}>
                <View style={styles.canvas}>
                    <Text style={styles.body}>A4 sheet of paper</Text>
                </View>

            </View>

            {/* Contains the bottom element selector tab*/}
            <ElementSelectorTab />

        </View>
    )
}