import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

import styles, { Colors } from '../Styles/styles';

export function CreateTemplatePage() {
    return (
        <View style={styles.container}> 
            <Text style={styles.body}> This is the Create Template Page </Text>
        </View>
    )
}
