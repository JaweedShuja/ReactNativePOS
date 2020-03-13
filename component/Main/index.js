import React, { Component } from 'react'
import { View , Text} from 'react-native'
import Header from './header.js'
import Categories from './categories.js'
import Buttons from './buttons.js'
import Items from './items.js'
import Invoice from './invoice.js'
 
class index extends Component {
   render() {
       return (
           <View style={{ flex:1, backgroundColor:'white'}}>
               <Header/>
               <View style={{flexDirection:'row', flex:8}}>
                    <View style={{flex:1}}>
                        <Categories/>
                    </View>
                    <View style={{flex:2}}>
                        <View style={{flex:4}}>
                            <Items />
                        </View>
                        <View style={{flex:3}}>
                            <Invoice/>
                        </View> 

                    </View>
               </View>
               <View style={{ flex:1}}>
                    <Buttons />
               </View>
           </View>
        )
    }
}

export default index