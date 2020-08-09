import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Sample} from './Sample';
import LoginForm from './Login'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' ,
        backgroundColor: '#E6E6FA'
    },
    text: {

    }
});

class Settings extends Component {
    render() {
        const greeting = '{"message": "SampleMessage"}';

        return (
            <View style={styles.container}>
                <LoginForm/>
            </View>    
            
        );
    }
}



export default Settings;