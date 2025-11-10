import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

import styles from "../../Styles/styles";
import { loadFonts } from "../../Styles/styles";
import { useEffect } from "react";
import { setupDatabase } from "../../Database/databaseSetup";


// To avoid errors for passing parameters in the 
// component CustomerCard, this interface is used
// otherwise the compiler requires the need to 
// explicitly state the type of the parameters
// which is only possible through the interface
interface CustomerInformationProps {
    name: string,
    phoneNumber: string,
    address: string,
    email: string
}

export function CustomerCard({name, phoneNumber, address, email}: CustomerInformationProps) {

    const fontsLoaded = loadFonts();
    if (!fontsLoaded) return null;

    return (
        <View style={styles.customerCard}>
            <TouchableWithoutFeedback onPress= {() => {setupDatabase()}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.body}>{name}</Text>
                    <Text style={styles.body}>{phoneNumber}</Text>
                    <Text style={styles.body}>{address}</Text>
                    <Text style={styles.body}>{email}</Text>
                </View>
            </TouchableWithoutFeedback>

        </View>
    )
}

export function CustomerInfo() {

//     const [modalVisible, setModalVisible] = useState(false);

//     return (

//         <Modal 
//             animationType='slide'
//             transparent={true}
//             visible={modalVisible}
//             onRequestClose={() => {setModalVisible(!modalVisible)}}
//             >
                

//         </Modal>

//     )
    
}