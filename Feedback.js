import React, { Component } from 'react';

import {  StyleSheet, View, Image,KeyboardAvoidingView,TextInput, Alert, } from 'react-native'; 

import {Container,Fab, Header, Title,  Content, Picker, Footer, FooterTab,
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
      reviewerEmail: '',
      subject: '',
      suggestion: '',
      active: false,
      emailValidator: true,
      subjectValidator: true,
      suggestionValidator: true,
    };
  }


      handleSubmit() {
        console.log(this.loginform);
      };
    
      _simpleAlertHandler=()=>{
        Alert.alert(
         'Thanks For your response',
         'We consider your feedback/Suggestions and also contact with you if required.\n Thank you',
          );
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
  

      feedback = () =>{
        console.log('getting data from fetch+++++++++++++++++++++++++')
        if (this.state.reviewerEmail != '') {
        if (this.state.subject != '') {
          if (this.state.suggestion != '') {
          
      fetch('http://167.71.64.243:9090/userLogin/addAppReview', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
      "reviewerEmail": this.state.reviewerEmail,
      "subject": this.state.subject,
      "feedback": this.state.suggestion,
        }
        )},)
        .then((response) => response.json())
        .then((json) => {
          if(json.success === true )
          {
            Alert.alert(
              'Thanks For your response',
         'We consider your feedback/Suggestions and also contact with you if required.\n Thank you',
               );
        }
        else{
          Alert.alert(
            'Try Later !',
       'Unfortunately Suggestion & Feedback not Submitted ',
             );
        }
          console.log('getting data from fetch => ',json.data.review)
        })
        .catch((error) => {
          console.error(error);
        });
      }
    else{
      alert('Please Enter Your Message')
    }
    } else {
      Alert.alert(
        'Please Enter Your Suggestion or Feedback Subject',
      );
    }
    } else {
      Alert.alert(
        'Please Enter Your Email',
        
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
        reviewerEmail: text
      })
    }
    else {
      console.log("Email is not Correct");
      this.setState({
        emailValidator: false,
       })
    }
  }


  validateSubject = (text) => {
    console.log(text);
    let reg =  /^[a-zA-Z0-9][a-zA-Z0-9\s]*$/;
    if (reg.test(text)) {
      console.log("About is Correct");
      this.setState({
         subjectValidator: true, 
         subject: text
         })
    }
    else {
      console.log("About is Not Correct");
      this.setState({ 
        subjectValidator: false 
      })
      
    }
  }


  validateSuggestion = (text) => {
    console.log(text);
    let reg =  /^[a-zA-Z0-9][a-zA-Z0-9\s]*$/;
    if (reg.test(text)) {
      console.log("Suggestion is Correct");
      this.setState({
         suggestionValidator: true, 
         suggestion: text
         })
    }
    else {
      console.log("Suggestion is Not Correct");
      this.setState({ 
        suggestionValidator: false 
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
           <Title>Suggestion & Feedback</Title>
         </Body>
   
      
   
           </Header>
        
       <Content>

       <KeyboardAvoidingView behavior="padding" style={styles.container}>
      
       <Text style= {styles.textContainer}>
                Suggestion & Feedback
            </Text>


            <Image source = {{uri:'data:image/png;base64,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'}}  
      style = {styles.img}  
      />


            <View style={[styles.inputContainer, 
           {borderColor: !this.state.emailValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnexF_wWejP4MmEzNsP48eXWmgfhs__gunUrM3LKX_IWc-44I&s'}}/>
          <TextInput style={styles.inputs}
              placeholder="Enter Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.validateEmail(text)}/>
        </View>
      
        <View style={[styles.inputContainer, 
            {borderColor: !this.state.subjectValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'data:image/png;base64,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'}}/>
          <TextInput style={styles.inputs}
              placeholder="Subject"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.validateSubject(text)}/>
        </View>
        
        <View style={[styles.inputContainer1, 
           {borderColor: !this.state.suggestionValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon1} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgkPbIoUoiu4TzOFfc8oyA34M07dYcMWShAlkfHpwGrZpGI-p&s'}}/>
          <TextInput style={styles.inputs1}
              placeholder="Type Here"
              keyboardType="default"
              underlineColorAndroid='transparent'
              multiline= {true}
              maxLength= {200}
              onChangeText={(text) => this.validateSuggestion(text)}  />
        </View>


        <Button block success  style={styles.btn} 
         onPress={this.feedback}
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
    paddingBottom: 0,
    backgroundColor: '#cc7d16',
    alignItems: 'center'
  },
  cntainer: {   
    backgroundColor: '#cc7d16',
    justifyContent: 'center', 
}, 
responsiveBox: {
  width: wp('100%'),
  height: hp('100%'),

}, 
textContainer: {
    textAlign: 'center',
   color: 'white',
   fontSize: wp(7),
   fontWeight: 'bold',
   marginTop: wp(5),
   padding: wp(3),
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
inputContainer1: {
    borderColor: 'orange',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderWidth: 5,
    width:wp(80),
    height:hp(30),
    marginBottom:0,
    flexDirection: 'row',
    alignItems:'center'
},
inputIcon1:{
    width:30,
    height:30,
    marginLeft:15,
    marginBottom: 135,
    },
inputs1:{
    height:200,
    marginLeft:16,
    paddingTop: 20,
    borderBottomColor: '#FFFFFF',
    flex:1,
    maxWidth: 250,
    textAlignVertical: 'top',
    fontSize: 20,
      },
radio: {
    flexDirection: 'column',
    margin: 10,
    maxWidth: 300,
},
btntxt: {
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  justifyContent: 'center',
},
img:{
  width: wp('50%'),
  height: hp('25%'),
  borderRadius: 100,
 marginHorizontal: wp(10),
 marginVertical: hp(3),
},
btn: {
  marginHorizontal: wp(10),
  marginVertical: hp('5%')
}
});