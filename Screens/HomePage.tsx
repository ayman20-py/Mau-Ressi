import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { useEffect } from 'react';

import styles from '../Styles/styles';
import { Colors, Fonts, loadFonts } from '../Styles/styles';


export async function HomePage() {
    const fontsLoaded = loadFonts();
    if (!fontsLoaded) return null;


    return (
        <View style={styles.container}> 
            <Text style={styles.body}> This is the Home Page </Text>
        </View>
    )
}
