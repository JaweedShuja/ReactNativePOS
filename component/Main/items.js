import React, { Component } from 'react'
import { View, ScrollView, Text,Alert } from 'react-native'
 
class Items extends Component {
    constructor(props){
        super(props)

        this.state = {
            items:"this.props.items"
        }
    }
    componentDidMount(){
        //  Alert.alert(this.props.items.length.toString())
        //  Alert.alert(this.props.name)
    }
   render() {
       
    //    let transactions = []
    //    for(let i = 0; i < this.props.items.length; i++){
    //         transactions.push(
    //         <View style={{height:80, flexDirection:'row'}}>
    //             <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
    //                 <Text style={{fontWeight:'bold'}}>this.props.items[i].itemName </Text>
    //                 <Text>this.props.items[i].price</Text>
    //             </View>
    //             <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
    //                     <Text style={{fontWeight:'bold'}}> this.props.items[i].itemName</Text>
    //                     <Text>this.props.items[i].price</Text>
    //             </View>

    //         </View>
    //    )
    //    }

       return (
           <View style={{ flex:1,}}>
               {/* <ScrollView> */}
                   
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
                {/* {transactions} */}
                {/* <View style={{height:80, flexDirection:'row'}}>
                <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                         <Text style={{fontWeight:'bold'}}> Zinger Burger </Text>
                         <Text>190</Text>
                     </View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                              <Text style={{fontWeight:'bold'}}> Crispy Burger </Text>
                              <Text>200</Text>
                     </View>
 
                </View> */}
                {/* <View style={{height:80, flexDirection:'row'}}>
                <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                         <Text style={{fontWeight:'bold'}}> Ch. Cheese Burger </Text>
                         <Text>200</Text>
                     </View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                              <Text style={{fontWeight:'bold'}}> Egg Burger </Text>
                              <Text>100</Text>
                     </View>
                </View> */}
                {/* <View style={{height:80, flexDirection:'row'}}>
                <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                         <Text style={{fontWeight:'bold'}}> Egg Cheese Burger </Text>
                         <Text>120</Text>
                     </View>
                     <View style={{flex:1, backgroundColor:'lightgreen', margin:5, alignItems:'center', justifyContent:'center'}}>
                              <Text style={{fontWeight:'bold'}}> Sada Burger </Text>
                              <Text>50</Text>
                     </View>
 
                </View> */}
                
                {/* </ScrollView> */}
            
           </View>
        )
    }
}

export default Items