import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
 
class Buttons extends Component {
   render() {
       return (
           <View style={{flexDirection:'row', flex:1}}>
             <TouchableOpacity style={{backgroundColor:'pink', flex:2, margin:5, alignItems:'center', justifyContent:'center'}}>
                 <Text style={{fontSize:20, color:'gray', fontWeight:'bold'}}>Discard</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{backgroundColor:'lightgreen', flex:3, margin:5, alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:20, color:'gray', fontWeight:'bold'}}>Confirm</Text>
             </TouchableOpacity>
           </View>
        )
    }
}

export default Buttons