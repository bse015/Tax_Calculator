import React, { Component } from 'react';

import {  StyleSheet, View, Image,KeyboardAvoidingView,
                   TextInput, Alert, } from 'react-native'; 

import {Container,Fab, Header, Title,  Content, Footer, FooterTab,
             Button, Left,  Body, Text ,Icon } from 'native-base';  

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import Orientation from 'react-native-orientation';

import MenuButton from './components/MenuButton';


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oldPassword: '',
      newPassword: '',
      email: '',
      active: false,
      oldPasswordValidator: true,
      newPasswordValidator: true,
      emailValidator: true,
    };
  }

      handleSubmit() {
        console.log(this.loginform);
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



  resetPassword = () =>{
    console.log('getting data from fetch+++++++++++++++++++++++++')
    if (this.state.newPassword != '') {
    if (this.state.oldPassword != '') {
      if (this.state.email != '') {
      


  fetch('http://167.71.64.243:9090/userLogin/resetPassword', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": this.state.email,
      "oldPassword": this.state.oldPassword,
      "newPassword": this.state.newPassword,
    }
    )},)
    .then((response) => response.json())
    .then((json) => {
      if(json.success === true )
      {
        Alert.alert(
          'Whoo Whoo',
          'Your Password Has Been Reset Successfully',
           );
    }
    else{
      alert('Invalid Email or Old Password')
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
    'Please Enter  Your Old Password',
    'Password must be consist on aLower and uper case and a numeric digit'
  );
}
} else {
  Alert.alert(
    'Please Enter  Your New Password',
    'Password must be consist on aLower and uper case and a numeric digit'
  );
}
}




  validateEmail = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (reg.test(text)) {
      console.log("Email is Correct");
     // console.warn("Email is Correct");
      this.setState({ 
        emailValidator: true, 
        email: text
      })
    }
    else {
      console.log("Email is not Correct");
     // console.warn("Email is not Correct");
      this.setState({
        emailValidator: false,
       })
    }
  }



  validateOldPassword = (text) => {
    console.log(text);
    let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (reg.test(text)) {
      console.log("Password is Correct");
     // console.warn("Password is Correct");
      this.setState({ 
        oldPasswordValidator: true,
        oldPassword: text
       })
    }
    else {
      console.log("Password is Not Correct");
      this.setState({ 
        oldPasswordValidator: false
       })
    }
  }
        

  validateNewPassword = (text) => {
    console.log(text);
    let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (reg.test(text)) {
      console.log("Password is Correct");
      this.setState({ 
        newPasswordValidator: true,
        newPassword: text
       })
    }
    else {
      console.log("Password is Not Correct");
      this.setState({ 
        newPasswordValidator: false
       })
    }
  }
        

      
  render() {
    const { checked } = this.state;


    return (
      <Container style={styles.cntainer}>
      <Header style={{backgroundColor: '#01444e'}}>
        <Left >
               <MenuButton navigation={this.props.navigation} />
         </Left>
   
         <Body>
           <Title>Reset Password</Title>
         </Body>
   
      
   
           </Header>
   
       <Content>
      
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
    
         
         <Image source= {{uri: 'https://www.jijitechnologies.com/assets/images/JPRS-banner-icon.png'}}
         style = {styles.img}/>

       <Text style= {styles.textContainer}>
               Reset Password
            </Text>

            <Text style={styles.txt}>Enter Your New Password Below, We are just being extera Safe</Text>

            <View style={[styles.inputContainer,
        {borderColor: !this.state.emailValidator? 'red':'orange'}]}>
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

            <View style={[styles.inputContainer, 
         {borderColor: !this.state.oldPasswordValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_password-512.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Enter Old Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.validateOldPassword(text)}/>
        </View>

        <View style={[styles.inputContainer, 
         {borderColor: !this.state.newPasswordValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_password-512.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Enter New Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.validateNewPassword(text)}/>
        </View>


        <Button block success  style={styles.btn} 
         onPress={this.resetPassword}
        // onPress={() => this.props.navigation.navigate('Home')}
         //onPress={this.handleSubmit}
         ><Text style={styles.btntxt}>Submit</Text></Button>


 </KeyboardAvoidingView>

         </Content>
         <Footer >
  <FooterTab style={{backgroundColor: '#01444e'}}>
  
  <Button  vertical onPress={() => this.props.navigation.navigate('Home')}>
    <Icon name="home" />
      <Text>Home</Text>
          </Button>

          </FooterTab>
        </Footer>

      </Container>
    );
  }}

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 0,
    padding: 40,
    backgroundColor: '#cc7d16',
    alignItems: 'center',
  },
  cntainer: {  
    flex: 1,  
    backgroundColor: '#cc7d16',
    justifyContent: 'center', 
},  
textContainer: {
    textAlign: 'center',
   color: 'white',
   fontSize: wp(8),
   fontWeight: 'bold',
   marginTop: 0,
   padding: 8,
},
inputContainer: {
  borderColor: 'orange',
  backgroundColor: '#FFFFFF',
  borderRadius:30,
  borderWidth: 5,
  width:wp(80),
  height:hp(7),
  marginBottom:wp(5),
  flexDirection: 'row',
  alignItems:'center'
},
inputs:{
  height:45,
  marginLeft:16,
  borderBottomColor: '#FFFFFF',
  flex:1,
  fontSize: 20,
},
inputIcon:{
width:30,
height:30,
marginLeft:16,
justifyContent: 'center'
},
btntxt: {
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  justifyContent: 'center',
},
responsiveBox: {
  width: wp('100%'),
  height: hp('100%'), 
  justifyContent:'center',
}, 
img:{
  flex: 1,
  width: wp('80%'),
  height: hp('20%'),
 marginLeft: wp(5),
 marginTop: hp(5),
padding: 100,
},
txt: {
  fontSize :wp(4),
  fontWeight: '500',
  color: 'white',
  textAlign: 'center',
  marginBottom: 10,
  paddingBottom: 10,
}
});