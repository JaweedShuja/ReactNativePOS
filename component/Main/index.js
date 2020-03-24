import React, { Component } from 'react'
import { View , Text, ScrollView, Alert} from 'react-native'
import Header from './header.js'
import Categories from './categories.js'
import Buttons from './buttons.js'
import Items from './items.js'
import Invoice from './invoice.js'
import firebase from '../../firebase.js'
 
class index extends Component {
    constructor(props){
        super(props)

        this.state = {
            categories:[],
            selectedCategoryID:'',
            selectedItems:[],
            AllItems:[],
            ch:''
        }
        this.getAllCategories = this.getAllCategories.bind(this)
        this.getSelectedItems = this.getSelectedItems.bind(this)
        this.getAllItems = this.getAllItems.bind(this)
    }
    componentDidMount(){
        this.getAllCategories();
        this.getAllItems();
        
    }
    // componentDidUpdate(){
    //     this.setState({ch:'ch'})
    // }
    getSelectedItems(){
        let id = this.state.selectedCategoryID;
        for(let i = 0; i < this.state.AllItems.length; i++){
            if(this.state.AllItems[i].categoryID == id){
                this.state.selectedItems.push({
                    categoryID:this.state.AllItems[i].categoryID,
                    id:this.state.AllItems[i].id,
                    itemName:this.state.AllItems[i].itemName,
                    price:this.state.AllItems[i].price
                })
            }
        }
        this.setState({
            ch:'ch'
        })


        

    }
    async getAllItems(){
        let itemCategoryRef = firebase.database().ref('item');
        await itemCategoryRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = []

            for(let item in items){
                newState.push({
                    categoryID:items[item].categoryID,
                    id:items[item].id,
                    itemName:[item].itemName,
                    price:[item].price
                })
            }

            this.setState({
                AllItems:newState
            })
        })

        this.getSelectedItems();
    }
    getAllCategories(){
        let itemCategoryRef = firebase.database().ref('itemCategory');
        itemCategoryRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = []

            let counter = 0;
            for(let item in items){
                newState.push({
                    id:items[item].id,
                    categoryName:items[item].categoryName
                })
                if(counter == 0){
                    this.setState({selectedCategoryID:items[item].id})
                    // Alert.alert(items[item].id)
                }
                
                counter++;
            }
            // Alert.alert(this.state.selectedCategoryID)

            this.setState({
                categories:newState
            })
        })
    }
   render() {
       let transactions = []
       for(let i = 0; i < this.state.selectedItems.length; i++){
           transactions.push(
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
           )
       }
       return (
           <View style={{ flex:1, backgroundColor:'white'}}>
               <Header/>
               <View style={{flexDirection:'row', flex:8}}>
                    <View style={{flex:1}}>
                        <ScrollView>
                        {
                            this.state.categories.map(data => <Categories categoryName={data.categoryName} />)
                        }
                        </ScrollView>
                    </View>
                    <View style={{flex:2}}>
                        <View style={{flex:4}}>
                            <ScrollView>
                            {this.state.selectedItems.map(() => <Items />)}
                            {/* <Items items={this.state.selectedItems} name={"javed"}/> */}
                                {/* {transactions} */}
                            </ScrollView>
                        </View>
                        <View style={{flex:3}}>
                            <Invoice/>
                        </View> 

                    </View>
               </View>
               <View style={{ flex:1}}>
                    <Buttons />
               </View>
               <Text onPress={() => Alert.alert(this.state.selectedItems.length.toString())}>Hello</Text>
           </View>
        )
    }
}

export default index