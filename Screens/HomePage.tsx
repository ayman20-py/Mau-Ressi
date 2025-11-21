import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import * as React from 'react';
import { useEffect } from 'react';

import styles from '../Styles/styles';
import { useAppFonts } from '../Styles/styles';


export async function HomePage() {
    const fontsLoaded = useAppFonts();
    if (!fontsLoaded) {
        return (
            <View style={[styles.createTemplateMainContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading fonts...</Text>
            </View>
        );
    }


    return (
        <View style={styles.container}> 
            <Text style={styles.body}> This is the Home Page </Text>
        </View>
    )
}
