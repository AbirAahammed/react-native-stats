import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles';
import { color } from 'react-native-reanimated';

class Feed extends Component {
    render () {
        return (
            <View style={styles.center}>
                <Text style={styles.title}>Navigation Drawer</Text>
                <TouchableOpacity>
        <Text style={styles.underLineText}>Your underline Text</Text>
      </TouchableOpacity>
            </View>
        );
    }
}

export default Feed;