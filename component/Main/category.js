import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
 
class Category extends Component {
    constructor(props){
        super(props)
    }
   render() {
       return (
           <View>
               <Text>{this.props.name}</Text>
           </View>  
        )
    }
}

export default Category

