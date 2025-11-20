import * as React from 'react';
import {View, Text} from 'react-native';

import styles, {useAppFonts} from '../Styles/styles';


export function CreateTemplatePage() {
    const loadFonts = useAppFonts();
    return (
        <Text style={styles.body}>This is in the create templates page</Text>
    )
}