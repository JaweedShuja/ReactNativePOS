import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
 
class Category extends Component {
    constructor(props){
        super(props)
    }
   render() {
       return (
           <View style={styles.container}>
               <Text>{this.props.name}</Text>
           </View>  
        )
    }
}

export default Category

const styles = StyleSheet.create({
    container:{
        height:50,
        align:'create',
        justifyContent:'create'

    }
})