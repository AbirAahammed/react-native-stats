import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './styles/styles';

import Feed from './components/feed'
import Home from './components/home'
import Settings from './components/settings'
import Info from './components/info'
import Pie from './components/pie';



const Tab = createMaterialBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};
const Darktheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons style={styles.menu} name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen icon="settings"
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign style={styles.menu} name="setting" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons style={styles.menu} name="more" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Info"
          component={Info}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons style={styles.menu} name="information" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Pie"
          component={Pie}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign style={styles.menu} name="questioncircle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
