import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import InvoiceItem from './invoiceItem.js'
 
class Invoice extends Component {
   render() {
       return (
           <View style={{ flex:1,}}>
               <View style={{flex:6}}>
               <ScrollView>
                <InvoiceItem/>
                <InvoiceItem/>
                <InvoiceItem/>
                <InvoiceItem/>
                <InvoiceItem/>
                <InvoiceItem/>
               </ScrollView>

               </View>
               <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:15, fontWeight:'bold'}}>
                        Total Amount: 12000
                    </Text>
               </View>

               
           </View>
        )
    }
}

export default Invoice