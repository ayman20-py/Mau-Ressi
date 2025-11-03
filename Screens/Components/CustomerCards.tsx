import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";

import styles from "../../Styles/styles";
import { loadFonts } from "../../Styles/styles";
import { useState } from "react";

export function CustomerCard() {
    const fontsLoaded = loadFonts();
    if (!fontsLoaded) return null;
    
    return (
        <View style={styles.customerCard}>
            <View style={{justifyContent: 'center'}}>
                <Text style={styles.body}>Yousouf Ayman Cassim</Text>

            </View>

        </View>
    )
}

// export function CustomerInfo() {

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
    
// }