import { StyleSheet } from "react-native";
import { useFonts, Urbanist_400Regular, Urbanist_600SemiBold, Urbanist_700Bold } from '@expo-google-fonts/urbanist';

// Function used to load the fonts in each files
export function loadFonts() {
    const [fontsLoaded] = useFonts ({
        Urbanist_400Regular,
        Urbanist_600SemiBold,
        Urbanist_700Bold
    })

    return fontsLoaded;
}

// This enum is used to define the color properties in order to keep 
// everything standard and centralized
export const Colors = {
    WHITE: '#FFFF',
    BLACK: '#000000',
    TEAL: "#5dc4bbff",
    PrimaryFontColor: "#1E2E43",
    BackgroundColor: "#F9FAFB",

}


// This enum is used to define the fonts used in the project 
export const Fonts = {
    REGULAR: 'Urbanist_400Regular',
    SEMIBOLD: 'Urbanist_600SemiBold',
    BOLD: 'Urbanist_700Bold'
}

export default StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: Colors.BackgroundColor, 
        fontFamily: Fonts.SEMIBOLD,
        fontSize: 12
    },

    header: {
        backgroundColor: Colors.HeaderBackgroundColor,
        fontFamily: Fonts.BOLD,
    },

    body: {
        fontFamily: Fonts.SEMIBOLD,
        fontSize: 16
    }

})

