import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles/styles';

import Feed from './components/feed'
import Home from './components/home'

import Settings from './components/settings'

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons style={styles.menu} name="home" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen icon="settings" 
        name="Settings" 
        component={Settings} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons style={styles.menu} name="settings" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons style={styles.menu} name="more" color={color} size={size} />
            ),
          }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
