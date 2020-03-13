import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
 
class Items extends Component {
   render() {
       return (
           <View style={{ flex:1,}}>
               <ScrollView>
              <View style={{height:80, flexDirection:'row'}}>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                         <Text style={{fontWeight:'bold'}}> Chicken Burger </Text>
                         <Text>180</Text>
                     </View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                              <Text style={{fontWeight:'bold'}}> Beaf Burger </Text>
                              <Text>150</Text>
                     </View>
 
                </View>
                <View style={{height:80, flexDirection:'row'}}>
                <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                         <Text style={{fontWeight:'bold'}}> Zinger Burger </Text>
                         <Text>190</Text>
                     </View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                              <Text style={{fontWeight:'bold'}}> Crispy Burger </Text>
                              <Text>200</Text>
                     </View>
 
                </View>
                <View style={{height:80, flexDirection:'row'}}>
                <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                         <Text style={{fontWeight:'bold'}}> Ch. Cheese Burger </Text>
                         <Text>200</Text>
                     </View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                              <Text style={{fontWeight:'bold'}}> Egg Burger </Text>
                              <Text>100</Text>
                     </View>
                </View>
                <View style={{height:80, flexDirection:'row'}}>
                <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                         <Text style={{fontWeight:'bold'}}> Egg Cheese Burger </Text>
                         <Text>120</Text>
                     </View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                              <Text style={{fontWeight:'bold'}}> Sada Burger </Text>
                              <Text>50</Text>
                     </View>
 
                </View>
                
                </ScrollView>
            
           </View>
        )
    }
}

export default Items