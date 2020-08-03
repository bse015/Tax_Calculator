import React, { Component } from 'react';

import { Text,Image, View, Button, StyleSheet, KeyboardAvoidingView, TextInput, Alert } from 'react-native';

import { RadioButton } from 'react-native-paper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';


import Orientation from 'react-native-orientation';

import {StackActions ,NavigationActions} from 'react-navigation';



export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    password: '',
      checked: '1',
      emailValidtor: true,
      passwordValidator: true,
    };
  }

  
  login = () =>{
    console.log('getting data from fetch+++++++++++++++++++++++++')
    if (this.state.password != '') {
      if (this.state.email != '') {
      


  fetch('http://167.71.64.243:9090/userLogin/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": this.state.email,
      "password": this.state.password,
    }
    )},)
    .then((response) => response.json())
    .then((json) => {
      if(json.success === true )
      {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Home' , })],
      });
      this.props.navigation.dispatch(resetAction)
       //this.props.navigation.push('Home')
    }
    else{
      alert('Invalid Email or Password')
    }
      console.log('getting data from fetch => ',json)
    })
    .catch((error) => {
      console.error(error);
    });
  }
else{
  alert('Please Enter Email')
}
} else {
  Alert.alert(
    'Please Enter Password',
    'Password must be consist on aLower and uper case and a numeric digit'
  );
}
}


validateEmail = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (reg.test(text)) {
    console.log("Email is Correct");
    this.setState({ 
      emailValidator: true, 
      email: text
    })
  }
  else {
    console.log("Email is not Correct");
    this.setState({
      emailValidator: false,
     })
  }
}
 
  

  validatePassword = (text) => {
    console.log(text);
    let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (reg.test(text)) {
      console.log("Password is Correct");
    //  console.warn("Password is Correct");
      this.setState({ 
        passwordValidator: true,
        password: text
       })
    }
    else {
      console.log("Password is Not Correct");
     // console.warn("Password is Not Correct");
      this.setState({ 
        passwordValidator: false
       })
    }
  }



  CheckTextInput = () => {
    if (this.state.TextInputPassword != '') {
      if (this.state.TextInputEmail != '') {
        alert('Success')
      } else {
        alert('Please Enter Email');
      }
    } else {
      alert('Please Enter Password');
    }
  };



  Role = () => {
    if (this.state.checked = '1') {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(resetAction)
     // this.props.navigation.navigate('Home')
    } else if(this.state.checked = '2') {
      this.props.navigation.navigate('Home')
    }
  };


  static navigationOptions = {
    title: 'Login Here',
  };




  handleSubmit() {
    console.log(this.loginform);
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

    const { checked } = this.state;
    console.log(this.state.checked)
    
    return (

             <View style={styles.cntainer}>

            <View style={styles.responsiveBox}>  

      <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <Image source = {{uri:'https://smarttax.id/wp-content/uploads/2019/02/Logo-SmartTax-atas.png'}}  
      style = {styles.img}  
      />
     
     <View style={[styles.inputContainer, 
           {borderColor: !this.state.emailValidtor? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnexF_wWejP4MmEzNsP48eXWmgfhs__gunUrM3LKX_IWc-44I&s'}}/>
          <TextInput style={styles.inputs}
              placeholder="Enter Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.validateEmail(text)}/>
        </View>
        
        <View style={[styles.inputContainer, 
         {borderColor: !this.state.passwordValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_password-512.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              blurOnSubmit= {true}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.validatePassword(text)}
              />
        </View>


        <View style= {styles.radio}>
        <RadioButton 
value="Customer"
status={checked === '1' ? 'checked' : 'unchecked'}
onPress={() => { this.setState({ checked: '1' }); }}
/>
<Text style={{fontSize: 20, fontWeight: 'bold', marginTop:5}}>Customer </Text>

<RadioButton
value="Agent"
status={checked === '2' ? 'checked' : 'unchecked'}
onPress={() => { this.setState({ checked: '2' }); }}
/>
<Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 5}}>Tax Agent</Text>
</View>


        <Button style={styles.btn}
         title="Login" 
         onPress = {
          () => this.login(this.state.email, this.state.password)
        }
         //onPress={this.CheckTextInput}
         //onPress={this.Role}
         //onPress={this.handleSubmit}
         color="#009933" 
         />

           <Text style={styles.linkText }>
                    I Forget My Password ?  
                    <Text style={ styles.linkText1}
               onPress={() => this.props.navigation.navigate('ForgetPassword')}>
                 Reset Now 
           </Text> 
                </Text>

      </KeyboardAvoidingView>
      </View>
      </View>

     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: wp(10),
    backgroundColor: '#cc7d16',
  },
  responsiveBox: {
    width: wp('100%'),
    height: hp('100%'), 
    justifyContent:'center',
  }, 
  cntainer: {  
    flex: 1,  
    backgroundColor: '#cc7d16',
    justifyContent: 'center',
    alignItems: 'center',
},  
img:{
  width: wp('75%'),
  height: hp('20'),
 marginLeft: wp(3),
 marginBottom: hp(10)
},
linkText: {
  textAlign: 'center', 
  fontWeight: '500', 
  fontSize: wp(4),
  margin: wp(14),
},
linkText1: {
  textAlign: 'center', 
  fontWeight: 'bold', 
  fontSize: wp(5),
  color: 'white'
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
radio: {
  flexDirection: 'row',
  maxWidth: 300,
  marginBottom: 20,
  justifyContent: 'space-around'
},
});