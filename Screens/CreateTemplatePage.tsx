import * as React from 'react';
import {View, Text} from 'react-native';

import styles, {useAppFonts} from '../Styles/styles';


export function CreateTemplatePage() {
    const loadFonts = useAppFonts();
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
            <View style={styles.elementSelector}>

                <Text style={styles.body}>Element Selecter Tab</Text>
            </View>

        </View>
    )
}