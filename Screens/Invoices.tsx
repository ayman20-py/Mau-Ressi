
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';

import styles from '../Styles/styles';
import { Colors, Fonts, loadFonts } from '../Styles/styles';
import { useSQLiteContext } from 'expo-sqlite';

export function InvoicesPage() {
    const fontsLoaded = loadFonts();
    if (!fontsLoaded) return null;


    const db = useSQLiteContext();

    const testDatabse = async () => {
        try {
            console.log("Testing the database connection");

            await db.runAsync(
                `INSERT INTO Customers (name, phone, address, email) VALUES (?, ?, ?, ?);`,
                ["Test user", "1234567890", "Far Far Away Land", "test@gmail.com"]
            );

            console.log("Database operation successful");

        } catch (error) {
            console.log("Database failed to connect", error);
        }
    }

    return (
        <View style={styles.container}> 
            <Text>Database Test</Text>
            <Button title="Test" onPress={testDatabse} />
        </View>
    )
}
