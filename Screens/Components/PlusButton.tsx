import { Text, View, Dimensions, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Modal, TouchableHighlight } from 'react-native';
import styles from '../../Styles/styles';
import { useAppFonts } from '../../Styles/styles';

import { CustomerManipulation } from '../../Database/databaseSetup';
import { Constants } from '../../LogicControllers/SystemConstants';

import { useNavigation } from '@react-navigation/native';

interface PlusButtonInterface {
    text: string;
    routingScreen: string;
}

// The Plus Button is the button that will be present in the 
// customer & templates page that when pressed, will redirect the 
// user to the page to creata a new customer/template
export function PlusButton({text, routingScreen}: PlusButtonInterface) {
    const fontsLoaded = useAppFonts();
    const navigation = useNavigation();

    return (
        <View style={styles.newCustomerButtonContainer}> 
            <View style={styles.newCustomerButtonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    try {
                        (navigation as any).navigate(routingScreen);
                    }
                    catch (error) {
                        console.log("Screen not found, could not route to screen");
                    }
                    
                }}>
                        <Text style={styles.buttonText}>+ {text}</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
}