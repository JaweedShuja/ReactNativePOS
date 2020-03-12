import React,{Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'

export default class FirstPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>This is page 1</Text>
                <Button title="go to second page"
                onPress={() => this.props.goto('SecondPage')}
                ></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})