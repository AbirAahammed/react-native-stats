import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Tile } from 'react-native-elements';
import styles from '../styles/styles'
const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }
     // more users here
   ]

class Info extends Component {
    render() {
        return (
            <View>
                <Tile
                    imageSrc={require('../asset/145562.jpg')}
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
                    featured
                    caption="Some Caption Text"
                />
                {/* <Card title="CARD WITH DIVIDER">
                {
                    users.map((u, i) => {
                    return (
                        <View key={i} style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: u.avatar }}
                        />
                        <Text style={styles.name}>{u.name}</Text>
                        </View>
                    );
                    })
                }
                </Card> */}
            </View>
        );
    }
}

export default Info;