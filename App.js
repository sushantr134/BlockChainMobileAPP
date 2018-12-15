import React, { Component } from 'react';
import { Text,ImageBackground,ScrollView,StyleSheet } from 'react-native';
import LoginForm from './components/Login/Login'

export default class App extends Component {
  render() {
    return (
        <ScrollView style={{overflow:'scroll',width:'100%',height:'100%',position:"absolute",zIndex:-1,backgroundColor:'#ffffff'}}>
             <LoginForm userType="driver" />
        </ScrollView>
    );
  }
}
