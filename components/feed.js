import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

import { styles } from '../styles/styles';
import { color } from 'react-native-reanimated';
import CardView from 'react-native-cardview'
import SampleData from '../CRUD/SampleData'
import { ScrollView } from 'react-native-gesture-handler';
class Feed extends Component {
    state = {
        data: []
    };
    fetchData = async () => {
        const response = await fetch("http://localhost:3000/Movies");
        const json = await response.json();
        this.setState({data: json.results});
        console.log(this.state.data);
    };
    render () {
        var payments = [];

        // var obj = JSON.parse();
        console.log("Hello feed");
        var dataArr = [{"name": "abir", "age": 23}, {"name": "ahammed", "age": 34}, {"name": "sakib", "age": 19}]
        for(let i = 0; i < dataArr.length; i++){
    
            payments.push(

                <View key = {i}>
                    <TouchableOpacity>
                        <CardView
                            cardElevation={5}
                            cardMaxElevation={5}
                            cornerRadius={5}
                            style={styles.cardViewStyle}>
                            <View>
                                <Text style={styles.cardView_InsideText}> {dataArr[i].name} </Text>
                            </View>
                            <View>
                                <Text style={styles.cardView_InsideText}> {dataArr[i].age} </Text>
                            </View>

                            
                        </CardView>
                    </TouchableOpacity>
                </View>

            )
        }
        
        return (
            <SafeAreaView  style={styles.container}>
                <ScrollView>
                { payments }

                </ScrollView>
                
            </SafeAreaView>
        )    
    }
}

export default Feed;