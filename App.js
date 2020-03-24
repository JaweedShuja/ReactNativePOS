import React,{Component} from 'react'
import {View, Text} from 'react-native'
import FirstPage from './component/firstpage'
import SecondPage from './component/secondpage.js'
import Main from './component/Main'
import Dashboard from './component/Dashboard'
import AddCategory from './component/AddCategory'
import AddProduct from './component/AddProduct'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentPage:'Main'
    }

    this.changePage =this.changePage.bind(this)
  }

  changePage(name){
    this.setState({
      currentPage:name
    })
  }
  render(){
    switch(this.state.currentPage){
      case 'FirstPage':
        return <FirstPage goto={this.changePage}/>
        break;
      case 'SecondPage':
        return <SecondPage goto={this.changePage}/>
        break;
      case 'Main':
          return <Main goto={this.changePage}/>
      break;
      case 'Dashboard':
            return <Dashboard goto={this.changePage}/>
      break;
      case 'AddCategory':
            return <AddCategory goto={this.changePage}/>
      break;
      case 'AddProduct':
          return <AddProduct goto={this.changePage}/>
      break;                      
    }
    
  }
}