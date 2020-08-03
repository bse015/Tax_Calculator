import React, { Component } from 'react';  
import { StyleSheet, View } from 'react-native'; 
import { ActivityIndicator } from 'react-native-paper';

import * as firebase from 'firebase';
  
export default class First extends Component { 

    
    static navigationOptions = {
      header: null

      }; 

      componentDidMount() {
        Orientation.addOrientationListener(this._orientationDidChange)
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
           this.props.navigation.navigate("Home")
            } else {
                this.props.navigation.navigate("Login")
          }
        });
          
      }
  
    render() {  
        const {navigate} = this.props.navigation;
        return ( 
          
            <View style={styles.container}> 


  <ActivityIndicator size='large' color='#01444e' />

  

            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#cc7d16',
        justifyContent: 'center',
        alignItems: 'center',
       
    }
})  