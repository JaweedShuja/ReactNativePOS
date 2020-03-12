import React,{Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default class SecondPage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>This is page 2</Text>
                <Button title="go to first page"
                onPress={() => this.props.goto('FirstPage')}
                ></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'blue'
    }
})