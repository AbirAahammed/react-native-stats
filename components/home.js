import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };
  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
class Home extends Component {
    render () {
        return (
 
            <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center'}}>
            <Text>https://down.extermap.com/android/index.php?userid=140553&type=down&share_type=1!</Text>
          </View>
        );
    }
}

export default Home;