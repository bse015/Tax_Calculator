//import Required Components

import React, { Component } from 'react';

import { Text,Image, View, Button, StyleSheet, KeyboardAvoidingView, 
              TextInput, Alert } from 'react-native';

import { RadioButton } from 'react-native-paper';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import Orientation from 'react-native-orientation';


 //Export Default Class
export default class Login extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '', 
      checked: '1', 
      emailValidtor: true,
      nameValidator: true,
      passwordValidator: true,
    };
  }



  static navigationOptions = {
    title: 'Signup Here',
  };



 inputTest = () => {
  const { email, password } = this.state;
    alert('email: ' + email + ' password: ' + password)
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



  validateName = (text) => {
    console.log(text);
    let reg =  /^[a-zA-Z][a-zA-Z\s]*$/;
    if (reg.test(text)) {
      console.log("Name is Correct");
      //console.warn("Name is Correct");
      this.setState({
         nameValidator: true, 
         name: text
         })
    }
    else {
      console.log("Name is Not Correct");
    //  console.warn("Name is Not Correct. Password must consist of Lowercase, uppercase and one numerical digit.");
      this.setState({ 
        nameValidator: false 
      })
      
    }
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
 
 
  
  validatePassword = (text) => {
    console.log(text);
    let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (reg.test(text)) {
      console.log("Password is Correct");
     // console.warn("Password is Correct");
      this.setState({ 
        passwordValidator: true,
        password: text
       })
    }
    else {
      console.log("Password is Not Correct");
   //   console.warn("Password is Not Correct");
      this.setState({ 
        passwordValidator: false
       })
    }
  }
        


  signup = () =>{
    console.log('getting data from fetch+++++++++++++++++++++++++')
    if (this.state.password != '') {
      if (this.state.email != '') {
        if (this.state.name != '') {
      
  fetch('http://167.71.64.243:9090/userLogin/create', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "name": this.state.name,
      "email": this.state.email,
      "password": this.state.password,
      "userType": this.state.checked,
    }
    )},)
    .then((response) => response.json())
    .then((json) => {
      console.log('getting data from fetch => ',json.data.user)
    })
    .catch((error) => {
      console.error(error);
    });
    Alert.alert(
      'Congratulations !',
      'Your Account is succesfully Created',
      [
        { text: 'Login Here', onPress: () => this.props.navigation.navigate('Login')  },
        {
          text: 'No Thanks!',
          onPress: () => console.log('No Thanks Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  }
else{
  alert('Please Enter Name')
}
} else {
  alert('Please Enter Email');
}
} else {
  Alert.alert(
    'Please Enter Password',
    'Password must be consist on aLower and uper case and a numeric digit'
  );
}
  }




  goForFetch = () => {
    this.setState({
        fromFetch: true,
        loading: true,

    })
    fetch("192.168.10.19:9000//userLogin/create")
        .then(response => response.json())
        .then((responseJson) => {
            console.log('getting data from fetch', responseJson)
            setTimeout(() => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            }, 2000)

        })
        .catch(error => console.log(error))
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
 {borderColor: !this.state.nameValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/dotty/2x/name.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Name"
              keyboardType="default"
              underlineColorAndroid='transparent'
              blurOnSubmit= {true}
              onChangeText={text => this.validateName(text)}
             />
        </View>
      

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
         title="Sign up" 
        onPress = {
                 () => this.signup(this.state.name ,this.state.email, this.state.password, this.state.user_type)
               }
           // onPress={() =>  this.goForFetch  }
         color="#009933" 
         />


<Text style={{textAlign: 'center', fontWeight: '500', fontSize: 18, paddingVertical: hp(3)}}>
                  Already Have an Account ! {"\n"}  
                   <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18 }}
      onPress={() => this.props.navigation.navigate('Login')}>
                 Login Here 
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
    paddingVertical: hp(5),
    marginBottom: hp(20),
    backgroundColor: '#cc7d16',
  },
  cntainer: {  
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
img:{
  width: wp('60%'),
  height: hp('30%'),
 marginLeft: wp(10),
 marginTop: hp(5),
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