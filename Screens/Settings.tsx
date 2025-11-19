import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

import styles from '../Styles/styles';
import {useAppFonts} from '../Styles/styles';

export function SettingsPage() {
    const fontsLoaded = useAppFonts();

    return (
        <View style={styles.container}> 
            <Text style={styles.body}> This is the Settings Page </Text>
        </View>
    )
}
