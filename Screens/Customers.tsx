
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

    const [ready, setReady] = React.useState(true);


    if (!fontsLoaded || !ready) return null;

    return (
        <ScrollView style={styles.scrollViewProps}> 
            <View style={styles.container}> 
                <PlusButton />
                <View style={styles.mainContainer}>
                    <CustomerCard 
                        id={"C0001"}
                        name={"Ayman Cassim"}
                        phone={"+230 59899203"}
                        address={"Beau Bassin"}
                        email={"ayman@gmail.com"}
                    />
                    <CustomerCard 
                        id={"C0002"}
                        name={"Rayyaa Elahee"}
                        phone={"+230 57682966"}
                        address={"Beau Bassin"}
                        email={"rayyaa@gmail.com"}
                    />
                    <CustomerCard 
                        id={"C0003"}
                        name={"Noor Jumoorty"}
                        phone={"+230 59386926"}
                        address={"Phoenix"}
                        email={"noor@gmail.com"}
                    />
                    <CustomerCard 
                        id={"C0004"}
                        name={"Adriana Kanasava"}
                        phone={"+230 52768395"}
                        address={"Beau Bassin"}
                        email={"adriana@gmail.com"}
                    />
                    <CustomerCard 
                        id={"C0005"}
                        name={"Ahmed Mutahar"}
                        phone={"+230 58636962"}
                        address={"Yemen"}
                        email={"ahmed@gmail.com"}
                    />
                    <CustomerCard 
                        id={"C0006"}
                        name={"Hasan Bamadhaf"}
                        phone={"+230 59266501"}
                        address={"Yemen"}
                        email={"hasan@gmail.com"}
                    />
                </View>
            </View>

        </ScrollView>
    )
}
