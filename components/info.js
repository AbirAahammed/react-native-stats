import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }
  });

class Info extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/drone.jpg')} style={styles.image}>

            <View style={styles.container}>
                    <Text>Info!</Text>
            </View>
            </ImageBackground>

        );
    }
}

export default Info;