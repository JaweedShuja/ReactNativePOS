import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
 
class InvoiceItem extends Component {
   render() {
       return (
           <View style={{ padding:5,}}>
               <Text style={{fontSize:15, fontWeight:'bold', marginLeft:10}}>Chicken Fried Rice</Text>
               <View style={{flexDirection:'row'}}>
                    <View style={{flex:6, justifyContent:'center'}}>
                    <Text style={{fontSize:15, marginLeft:10}}>12 x 1210 = 12410</Text>
                    </View>
                    <View style={{flex:5,  flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Image source={require('../../images/minus.png')} style={{height:25, width:25}}/>
                        </View>
                        <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../../images/remove.png')} style={{height:25, width:25}}/>
                        </View>
                        <View style={{flex:1}}>
                            <Image source={require('../../images/plus.png')} style={{height:25, width:25}}/>
                        </View>
                    </View>
               </View>
               <View style={{height:1, backgroundColor:'gray', marginTop:5}}>

               </View>
               
           </View>
        )
    }
}

export default InvoiceItem