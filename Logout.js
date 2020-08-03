import React, { Component } from 'react';  

import { Button, StyleSheet, View, Image, Text} from 'react-native'; 

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

  import HandleBack from './Back';

import Orientation from 'react-native-orientation';

  
export default class Logout extends Component { 

    
    static navigationOptions = {
        backgroundColor: '#DD5144',
      }; 


      
  onBack = () => {
    console.log ('pressed')
return this.props.navigation.navigate('First')
  };



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

            <Image source = {{uri:'https://smarttax.id/wp-content/uploads/2019/02/Logo-SmartTax-atas.png'}}  
                       style = {styles.img}  
                />  


            <Text style= {styles.textContainer}>
               Log out Successfully !
            </Text>


                <View style={styles.buttonContainer}>  
                    <Button  
                        
                        title="Login Again !" 
                        onPress={() => this.props.navigation.navigate('Login')} 
                        color="#009933"  
                    />  
                </View>  
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
        paddingVertical: hp('5')
    },
    textContainer: {
        textAlign: 'center',
       color: 'white',
       fontSize: wp(8),
       fontWeight: 'bold',
       marginHorizontal: wp(8),
       marginBottom: hp(7),
       padding:  wp(15),
    }
})  