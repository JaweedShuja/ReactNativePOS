import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
 
class Dashboard extends Component {
   render() {
       return (
           <View>
               {/* <TouchableOpacity style={{height:50, width:'150', backgroundColor:'red'}} onPress={this.props.goto='Main'}>

               </TouchableOpacity> */}
               <Text onPress={() => this.props.goto('Main')}>Hello</Text>
           </View>
        )
    }
}

export default Dashboard