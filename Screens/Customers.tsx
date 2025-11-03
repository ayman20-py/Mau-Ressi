
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as React from 'react';

import styles from '../Styles/styles';
import { Colors, Fonts, loadFonts } from '../Styles/styles';

import { PlusButton } from './Components/PlusButton';
import { CustomerCard } from './Components/CustomerCards';

export function CustomerPage() {
    const fontsLoaded = loadFonts();
    if (!fontsLoaded) return null;

    return (
        <ScrollView style={styles.mainContainer}> 
            <View style={{alignItems: 'center'}}> 
                <PlusButton />
                <CustomerCard />
                {/* <CustomerCard 
                    name={"Ayman Cassim"}
                    phoneNumber={"+230 59899203"}
                    address={"Beau Bassin"}
                    email={"ayman@gmail.com"}
                /> */}
            </View>

        </ScrollView>
    )
}
