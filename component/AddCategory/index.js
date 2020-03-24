import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import firebase from '../../firebase.js'
import Header from '../Main/header.js'


 
class AddCategory extends Component {
    constructor(props){
        super(props)

        this.state = {
            categoryName:''
        }
        
        this.add = this.add.bind(this)
    }

    add(categoryName){
        if(categoryName != ''){
            var id = firebase.database().ref("itemCategory").push().getKey();
            firebase.database().ref('itemCategory').child(id).set({
                id,
                categoryName
            }).then(() => {
                Alert.alert('Success','Category Added !')
            }).catch((err) => {
                Alert.alert(err.message)
            })

            // Alert.alert(categoryName)

        }
        else{
            Alert.alert('Warning','Fields Cannot Be Empty !')
        }
    }
   render() {
       return (
           <View>
               <Header headerText='Add New Category'/> 
               <Text style={{margin:10}}>Category Name</Text>
               <TextInput onChangeText={(value) => this.setState({categoryName:value})} style={styles.inputTextStyle}></TextInput>
               <TouchableOpacity onPress={() => this.add(this.state.categoryName)} 
               style={styles.btnStyle}>
                    <Text style={{fontSize:17, color:'white'}}>SAVE</Text>
               </TouchableOpacity>
           </View>
        )
    }
}

export default AddCategory

const styles = StyleSheet.create({
    inputTextStyle:{
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