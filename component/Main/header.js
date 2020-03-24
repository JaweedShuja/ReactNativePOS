import React, { Component } from 'react'
import { View,Text, StyleSheet,Image } from 'react-native'
 
class Header extends Component {
   render() {
       return (
           <View style={styles.container}>
               <Image style={styles.image} source={require('../../images/posicon.png')}/>
               <Text style={styles.font}>Mini POS</Text>
               <Text style={styles.headerText}>{this.props.headerText}</Text>
           </View>
        )
    }
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:10,
        flexDirection:'row',
        alignItems:'center'
    },
    font:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:5,
    },
    headerText:{
        fontSize:16,
        fontWeight:'bold',
        marginLeft:5,  
        color:'red',
        marginLeft:30
    },
    image:{
        height:35,
        width:35,
    }
})