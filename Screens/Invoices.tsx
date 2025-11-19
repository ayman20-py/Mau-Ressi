
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';

import styles from '../Styles/styles';
import { useAppFonts } from '../Styles/styles';

export function InvoicesPage() {
    const fontsLoaded = useAppFonts();

    return (
        <View style={styles.container}> 
        </View>
    )
}
