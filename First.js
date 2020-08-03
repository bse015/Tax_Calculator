import React, { Component } from 'react';  

import { Button, StyleSheet, View, Image, Text } from 'react-native'; 

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

  import HandleBack from './Back';

import Orientation from 'react-native-orientation';

import {StackActions ,NavigationActions,} from 'react-navigation';
  
export default class First extends Component { 

    
    static navigationOptions = {
        title: 'Welcome',
      }; 

      onBack = () => {
        return this.props.navigation.navigate('First')
}

      componentDidMount() {
        Orientation.addOrientationListener(this._orientationDidChange)
      }
  
      componentWillUnmount() {
        Orientation.removeOrientationListener(this._orientationDidChange)
      }
  
      _orientationDidChange(orientation) {
        console.log(orientation)
      }
  
  
    render() {  
        const {navigate} = this.props.navigation;
        return ( 

            <HandleBack onBack={this.onBack}>
          
            <View style={styles.container}> 


            <View style={styles.responsiveBox}> 
            <Text style= {styles.textContainer}>
                SMART TAX
            </Text>

<Image source = {{uri:'https://smarttax.id/wp-content/uploads/2019/02/Logo-SmartTax-atas.png'}}  
                       style = {styles.img}  
                />  

                <View style={styles.buttonContainer}>  
                    <Button  
                        
                        title="Login Now!" 
                        onPress={() => this.props.navigation.navigate('Login')} 
                        color="#009933"  
                    />  
                </View>  
                <Text style={{textAlign: 'center', fontWeight: '500', fontSize: 15}}>
                    Not Have Account yet ! 
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15 }}
      onPress={() => this.props.navigation.navigate('Signup')}>
                 Register Now  
</Text> 
                </Text>
</View>

            </View>  
             </HandleBack>
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#cc7d16',
        justifyContent: 'center',
        alignItems: 'center',
       
    }, 
    responsiveBox: {
        width: wp('100%'),
        height: hp('100%'), 
        justifyContent:'center',
      }, 
    buttonContainer: {  
        marginBottom: hp('7%'),
        paddingHorizontal: wp(8),
    },  
    img:{
        width: wp('85%'),
        height: hp('35%'),
        marginLeft: wp('10%'),
        marginBottom: hp('10')
    },
    textContainer: {
        textAlign: 'center',
       color: 'white',
       fontSize: wp(12),
       fontWeight: 'bold',
       marginHorizontal: wp(8),
       padding:  wp(5),
    }
})  