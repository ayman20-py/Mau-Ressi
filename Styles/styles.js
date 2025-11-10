import { StyleSheet, Dimensions} from "react-native";
import { useFonts, Urbanist_400Regular, Urbanist_600SemiBold, Urbanist_700Bold } from '@expo-google-fonts/urbanist';

// Getting the size of the width and height of the screen
// for better component rendering
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

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
    CoralRed: "#F65C51",

}


// This enum is used to define the fonts used in the project 
export const Fonts = {
    REGULAR: 'Urbanist_400Regular',
    SEMIBOLD: 'Urbanist_600SemiBold',
    BOLD: 'Urbanist_700Bold'
}

export default StyleSheet.create({
    mainContainer: { 
        flex: 1,
        backgroundColor: Colors.BackgroundColor, 
        fontFamily: Fonts.SEMIBOLD,
        paddingTop: 0,
        alignItems: 'center',
        marginBottom: 20
    },

    header: {
        backgroundColor: Colors.BackgroundColor,
        fontFamily: Fonts.BOLD,
    },

    body: {
        fontFamily: Fonts.SEMIBOLD,
        fontSize: 16
    },

    button: {
        flex: 1,
        backgroundColor: Colors.CoralRed,
        width: width * 0.6,
        height: 70,

        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        
        borderRadius: 20
    },

    buttonText: {
        fontFamily: Fonts.BOLD,
        fontSize: 20,
        color: 'white',
    },

    container: {
        backgroundColor: Colors.BackgroundColor,

        flex: 1,
        alignItems: 'center',
    },

    scrollViewProps: {
        flex: 1,
        backgroundColor: Colors.BackgroundColor, 
        fontFamily: Fonts.SEMIBOLD,
        paddingTop: 20,
    },

    customerCard: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width: width * 0.9,
        height: 110,

        marginBottom: 10,

        backgroundColor: Colors.BackgroundColor,
        borderRadius: 22,
        borderWidth: 0.5,

        borderStyle: 'solid',
        borderColor: Colors.PrimaryFontColor
    }

})

