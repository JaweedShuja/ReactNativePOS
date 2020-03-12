import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
 
class Items extends Component {
   render() {
       return (
           <View style={{ flex:1,}}>
               <ScrollView>
              <View style={{height:80, flexDirection:'row'}}>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
 
                </View>
                <View style={{height:80, flexDirection:'row'}}>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
 
                </View>
                <View style={{height:80, flexDirection:'row'}}>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
 
                </View>
                <View style={{height:80, flexDirection:'row'}}>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
 
                </View>
                <View style={{height:80, flexDirection:'row'}}>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
 
                </View>
                <View style={{height:80, flexDirection:'row'}}>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
 
                </View>
                <View style={{height:80, flexDirection:'row'}}>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5}}></View>
 
                </View>
                </ScrollView>
            
           </View>
        )
    }
}

export default Items