import React, { Component } from 'react';

import { Alert,Text,Image, View, Button, StyleSheet, 
  KeyboardAvoidingView, TextInput,} from 'react-native';

import FlashMessage from "react-native-flash-message";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import Orientation from 'react-native-orientation';


export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      emailValidtor: true,
    };
  }


  _simpleAlertHandler=()=>{
    Alert.alert(
      'Email sent Successfully');
  }

  static navigationOptions = {
    title: 'Forget Password',
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



  validateEmail = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (reg.test(text)) {
      console.log("Email is Correct");
    //  console.warn("Email is Correct");
      this.setState({ 
        emailValidator: true, 
        email: text
      })
    }
    else {
      console.log("Email is not Correct");
    //  console.warn("Email is not Correct");
      this.setState({
        emailValidator: false,
       })
    }
  }


  render() {
    return (
      <View style={styles.cntainer}> 
      

            <View style={styles.responsiveBox}> 

      <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <Image source = {{uri:'https://ps.w.org/mass-users-password-reset/assets/icon-256x256.png?rev=1721166'}}  
      style = {styles.img}  
      />
      

        <Text style={styles.text1}>Please enter your registered Email ID</Text>
        <Text style={styles.text}>We will send a new password to your registered mail</Text>

        <View style={[styles.inputContainer,
        {borderColor: !this.state.emailValidtor? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnexF_wWejP4MmEzNsP48eXWmgfhs__gunUrM3LKX_IWc-44I&s'}}/>
          <TextInput style = {styles.inputs}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               keyboardType = 'email-address'
               autoCapitalize = "none"
               blurOnSubmit= {true}
               onChangeText={(text) => this.validateEmail(text)}
              />
             
        </View>
        
        

        <Button
         onPress={this._simpleAlertHandler}
         title="Submit" 
         color="#009933" 
         />

<View>
  <FlashMessage ref="myLocalFlashMessage" /> 
</View>

      </KeyboardAvoidingView>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: wp(10),
    marginBottom: hp(15),
    backgroundColor: '#cc7d16',
  },
  cntainer: {  
    flex: 1,  
    backgroundColor: '#cc7d16',
    justifyContent: 'center',
    alignItems: 'center', 
},  
img:{
  width: wp('50%'),
  height: hp('30%'),
 marginLeft: wp(10),
 marginBottom: hp(5)
},
inputContainer: {
  borderColor: 'orange',
  backgroundColor: '#FFFFFF',
  borderRadius:30,
  borderWidth: 5,
  width:wp(80),
  height:hp(7),
  marginBottom:wp(6),
  flexDirection: 'row',
  alignItems:'center'
},
inputs:{
  height:hp(45),
  marginLeft:wp(6),
  borderBottomColor: '#FFFFFF',
  flex:1,
},
inputIcon:{
width:wp(8),
height:hp(4),
marginLeft:15,
justifyContent: 'center'
},
text: {
  fontSize: wp(4),
  fontWeight: '500',
  margin: wp(4),
  textAlign: 'justify',

},
text1: {
  fontSize: wp(4),
  fontWeight: 'bold',
  margin: wp(3),
  textAlign: 'justify',

}
});