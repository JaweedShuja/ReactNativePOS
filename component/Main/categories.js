import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Category from './category'
 
class Categories extends Component {
    constructor(props){
        super(props)

        this.state = {
            categories:[
                {name:'Burger'},
                {name:'Pizza'},
                {name:'Sendwich'},
                {name:'Chines'},
                {name:'Continental'},
                {name:'Kharai'},
                {name:'Chines'},
                {name:'Burger'},
                {name:'Pizza'},
                {name:'Sendwich'},
                {name:'Chines'},
                {name:'Continental'},
                {name:'Kharai'},
                {name:'Chines'},
            ]
        }
    }
   render() {
       return (
           <View>
               {/* <ScrollView> */}
                {/* {
                    this.state.categories.map((data) =>  */}
                    {/* <View> */}
                    <View style={{height:50, backgroundColor:"lightblue", alignItems:'center', justifyContent:'center'}}>
                        <Text > 
                        {this.props.categoryName}
                        </Text>
                        
                    </View>
                    <View style={{height:1, backgroundColor:'white', width:'100%'}}>
                            
                    </View>
                    
                    {/* </View> */}
                {/* //     )
                // } */}
                {/* </ScrollView> */}
           </View>
        )
    }
}

export default Categories