import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

import styles from "../../Styles/styles";
import { loadFonts } from "../../Styles/styles";

import { getCustomers, addNewCustomer, LastUsedIdsManipulation } from "../../Database/databaseSetup";
import { CustomerInterface } from '../../LogicControllers/CustomerClass';
import { Customer } from "../../LogicControllers/CustomerClass";

export function CustomerCard({name, phone, address, email}: CustomerInterface) {
    // Loading the fonts in the screen
    const fontsLoaded = loadFonts();
    if (!fontsLoaded) { return null;}

    return (
        <View style={styles.customerCard}>
            <TouchableOpacity onPress={async () => {
            }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.body}>{name}</Text>
                    <Text style={styles.body}>{phone}</Text>
                    <Text style={styles.body}>{address}</Text>
                    <Text style={styles.body}>{email}</Text>
                </View>
            </TouchableOpacity>

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