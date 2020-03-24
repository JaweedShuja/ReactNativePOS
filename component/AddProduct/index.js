import React, { Component } from 'react'
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity,
    Alert 
} from 'react-native'
import Header from '../Main/header'
import RNPickerSelect from 'react-native-picker-select'; 
import firebase from '../../firebase.js'

class AddProduct extends Component {
    constructor(props){
        super(props)

        this.state = {
            categories:[],
            itemName:'',
            price:'',
            categoryID:'',
            categoryName:'',
        }

        this.add = this.add.bind(this)
        this.getItemCategory = this.getItemCategory.bind(this)
    }
    componentDidMount(){
        this.getItemCategory();
    }
    getItemCategory(){
        let itemCategoryRef = firebase.database().ref('itemCategory');
        itemCategoryRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = []

            for(let item in items){
                newState.push({
                    id:items[item].id,
                    categoryName:items[item].categoryName
                })
            }

            this.setState({
                categories:newState
            })
        })
    }
    dateList = () => {

        const dataList = this.state.categories.map(x => ({
            label: x.categoryName,
            value: x.id
          }))
        return dataList;
      }

    add(itemName, price, categoryID){
        if(itemName != "" || price != ""){
            var id = firebase.database().ref('item').push().getKey();
            firebase.database().ref('item').child(id).set({
                id,
                itemName,
                price,
                categoryID
            }).then(() => {
                Alert.alert('Success','Item Added')
            }).catch((err) => {
                Alert.alert(err.message)
            })
        }
        else{
            Alert.alert('Fields cannot be empty')
        }
    }
      
   render() {
       return (
           <View>
               <Header headerText="Add Product" />

               <Text style={{margin:10}}>Item Name</Text>
               <TextInput style={styles.inputTextStyle} onChangeText={(value) => this.setState({itemName:value})}/>

               <Text style={{margin:10}}>Price</Text>
               <TextInput keyboardType={'numeric'} style={styles.inputTextStyle} onChangeText={(value) => this.setState({price:value})}/>

               <Text style={{margin:10}}>Category</Text>
               <View style={styles.dropDownView}>
                <RNPickerSelect
                    style={{color:'black'}}
                placeholder={{
                    label: 'Select Expense Category...',
                    value: null,
                }}
                items={this.dateList()}
                onValueChange={(id) => this.setState({
                    categoryID:id
                })}
                
                    />
               </View>

              <TouchableOpacity onPress={() => this.add(this.state.itemName, this.state.price, this.state.categoryID)} 
               style={styles.btnStyle}>
                    <Text style={{fontSize:17, color:'white'}}>SAVE</Text>
               </TouchableOpacity>
              
           </View>
        )
    }
}

export default AddProduct

const styles = StyleSheet.create({
    inputTextStyle:{
        backgroundColor:'white', 
        marginLeft:10, 
        marginRight:10, 
        borderBottomWidth:1, 
        borderBottomColor:'black',
    },
    dropDown:{
        backgroundColor:'#0e131e',
        padding:20,
        paddingLeft:15,
        paddingRight:15,
        fontSize:25,
      },
    dropDownView:{
        height:50, 
        backgroundColor:'white', 
        marginLeft:10, 
        marginRight:10, 
        borderBottomWidth:1, 
        borderBottomColor:'black',
    },
    btnStyle:{
        height:50, 
        width:150, 
        backgroundColor:'black',
        alignItems:'center', 
        justifyContent:'center', 
        alignSelf:'flex-end', 
        margin:10,
    }    
})