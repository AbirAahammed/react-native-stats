import * as React from 'react';
import { Appbar, Avatar, Button, Card, Checkbox, DataTable, FAB  } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export default class MyComponent extends React.Component {
  render() {
    return (

      <View style={styles.view}>
        <Appbar style={styles.appbar}>
          <Appbar.Action style={styles.menu} icon="archive" onPress={() => console.log('Pressed archive')} />
          <Appbar.Action style={styles.menu} icon="label" onPress={() => console.log('Pressed label')} />
          <Appbar.Action style={styles.menu} icon="delete" onPress={() => console.log('Pressed delete')} />
          <Appbar.Action style={styles.menu} icon="star" onPress={() => console.log('Pressed delete')} />
        </Appbar>
        <FAB
    style={styles.fab}
    small
    icon="archive"
    onPress={() => console.log('Pressed')}
  />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  view: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  appbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 40
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 20,
  },
  menu: {
    width: 90
  }
});