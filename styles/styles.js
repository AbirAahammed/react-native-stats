import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 36,
        marginBottom: 16
    },
    underLineText: {
        fontSize: 12,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    menu: {
        fontSize: 25
    },

    MainContainer: {
 
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
     
      },
     
      cardViewStyle:{
        height: 150,
        paddingTop: 50,
        backgroundColor:  '#23985D'
      },
     
      cardView_InsideText:{
     
        fontSize: 20, 
        color: '#000', 
        textAlign: 'center', 
     
    },

    container: {
        flex: 1, 
        justifyContent: 'center',  
    },
    homeText: {
        fontSize: 50,
        transform: [{ rotate: "45deg" }],
        position: "relative",
        
    }
});