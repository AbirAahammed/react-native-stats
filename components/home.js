import React, { Component } from 'react';
import { View, Text, StyleSheet , SafeAreaView, ActivityIndicator, FlatList, TouchableOpacity, Image} from 'react-native';
import CardView from 'react-native-cardview'
import { styles } from '../styles/styles';

class Home extends Component {
    state = {
        //Assing a array to your pokeList state
        pokeList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true
    }
    //Define your componentDidMount lifecycle hook that will retrieve data.
    //Also have the async keyword to indicate that it is asynchronous. 
    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const pokemonApiCall = await fetch('http://localhost:3000/Movies');
            const pokemon = await pokemonApiCall.json();
            this.setState({pokeList: pokemon, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    //Define your renderItem method the callback for the FlatList for rendering each item, and pass data as a argument. 
    renderItem(data) {
        return <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                    <View  style={styles.listItemContainer}>
                        <Text style={styles.pokeItemHeader}>{data.item.name}</Text>
                        <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}} 
                                style={styles.pokeImage}/>
                    </View>
                </TouchableOpacity>
    }
    render() {
        //Destruct pokeList and Loading from state.
        const { pokeList, loading } = this.state;
        var payments = [];

        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if(!loading) {
            for(let i = 0; i < pokeList.length; i++){
    
                payments.push(
    
                    <View key = {i}>
                        <TouchableOpacity>
                            <CardView
                                cardElevation={5}
                                cardMaxElevation={5}
                                cornerRadius={5}
                                style={styles.cardViewStyle}>
                                <View>
                                    <Text style={styles.cardView_InsideText}> {pokeList[i].name} </Text>
                                </View>
                                <View>
                                    <Text style={styles.cardView_InsideText}> {pokeList[i].rating} </Text>
                                </View>
    
                                
                            </CardView>
                        </TouchableOpacity>
                    </View>
    
                )
            }
            return <SafeAreaView>
                {/* <FlatList 
                    data={pokeList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.name} 
                    /> */}
                {payments}
            </SafeAreaView>
        } else {
            return <ActivityIndicator />
        }
    }
}
function animateText(){
    console.log("Home");
}
export default Home;