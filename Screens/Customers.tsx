
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as React from 'react';
import { useEffect } from 'react';

import styles from '../Styles/styles';
import { Colors, Fonts, loadFonts } from '../Styles/styles';

import { PlusButton } from './Components/PlusButton';
import { CustomerCard } from './Components/CustomerCards';

import { useSQLiteContext } from 'expo-sqlite';

export function CustomerPage() {
    const fontsLoaded = loadFonts();

    const [ready, setReady] = React.useState(false);


    if (!fontsLoaded || !ready) return null;

    return (
        <ScrollView style={styles.scrollViewProps}> 
            <View style={styles.container}> 
                <PlusButton />
                <View style={styles.mainContainer}>
                    <CustomerCard 
                        name={"Ayman Cassim"}
                        phoneNumber={"+230 59899203"}
                        address={"Beau Bassin"}
                        email={"ayman@gmail.com"}
                    />
                    <CustomerCard 
                        name={"Rayyaa Elahee"}
                        phoneNumber={"+230 57682966"}
                        address={"Beau Bassin"}
                        email={"rayyaa@gmail.com"}
                    />
                    <CustomerCard 
                        name={"Noor Jumoorty"}
                        phoneNumber={"+230 59386926"}
                        address={"Phoenix"}
                        email={"noor@gmail.com"}
                    />
                    <CustomerCard 
                        name={"Adriana Kanasava"}
                        phoneNumber={"+230 52768395"}
                        address={"Beau Bassin"}
                        email={"adriana@gmail.com"}
                    />
                    <CustomerCard 
                        name={"Ahmed Mutahar"}
                        phoneNumber={"+230 58636962"}
                        address={"Yemen"}
                        email={"ahmed@gmail.com"}
                    />
                    <CustomerCard 
                        name={"Hasan Bamadhaf"}
                        phoneNumber={"+230 59266501"}
                        address={"Yemen"}
                        email={"hasan@gmail.com"}
                    />
                </View>
            </View>

        </ScrollView>
    )
}
