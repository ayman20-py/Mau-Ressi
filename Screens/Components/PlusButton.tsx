import { Text, View, Dimensions, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Modal, TouchableHighlight } from 'react-native';
import styles from '../../Styles/styles';
import { useAppFonts } from '../../Styles/styles';

import { CustomerManipulation } from '../../Database/databaseSetup';
import { Constants } from '../../LogicControllers/SystemConstants';


// The Plus Button is the button that will be present in the 
// customer & templates page that when pressed, will redirect the 
// user to the page to creata a new customer/template
export function PlusButton() {
    const fontsLoaded = useAppFonts();
    if (!fontsLoaded) return null;


    return (
        <View style={styles.newCustomerButtonContainer}> 
            <View style={styles.newCustomerButtonContainer}>
                <TouchableOpacity style={styles.button} onPress={async () => {
                    console.log("Pressed the Button");
                }}>
                        <Text style={styles.buttonText}>+ New Customer</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
}