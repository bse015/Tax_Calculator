import React, { Component } from 'react';
//Import React
import {
  StyleSheet,
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
   Image,
   TouchableOpacity,
   TextInput,
 
} from 'react-native';
//Import basic react native components
import {Container,Fab, Header, Title, 
   Content,  Footer, FooterTab, Button, Left,  Body,   } from 'native-base';

   import {Icon } from 'react-native-elements'

   import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
 
  import Orientation from 'react-native-orientation';
  
  import MenuButton from './components/MenuButton';
 
 
export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      count: 0 ,
    active: false,
    reviewerEmail: '',
    review: '',
    subject: '',
    emailValidator: true,
    subjectValidator: true,
    suggestionValidator: true,
  };
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

    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.cntainer}>
      <Header style={{backgroundColor: '#01444e'}}>
        <Left >
               <MenuButton navigation={this.props.navigation} />
         </Left>
   
         <Body>
           <Title>Review Tax Agent</Title>
         </Body>
   
      
   
           </Header>
   
       <Content>
      
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
    
       <Text style= {styles.textContainer}>
           Review & Report {"\n"}
        " {this.props.navigation.state.params.JSON_ListView_Clicked_Item_Name} "
            </Text>

            <Text style={styles.txt}>You can Review and Report any issue about '{this.props.navigation.state.params.JSON_ListView_Clicked_Item_Name}' here, We will help you and take notice !</Text>


            <View style={[styles.inputContainer, 
           {borderColor: !this.state.emailValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnexF_wWejP4MmEzNsP48eXWmgfhs__gunUrM3LKX_IWc-44I&s'}}/>
          <TextInput style={styles.inputs}
              placeholder="Enter Your Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.validateEmail(text)}/>
        </View>

            
        <View style={[styles.inputContainer, 
            {borderColor: !this.state.subjectValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'data:image/png;base64,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'}}/>
          <TextInput style={styles.inputs}
              placeholder="Enter Subject of your Review"
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



        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => alert('Submitted')}>
          {/*Clicking on button will show the rating as an alert*/}
          <Text style={styles.TextStyle}>Submit</Text>
        </TouchableOpacity>
         


 </KeyboardAvoidingView>
 
         </Content>
         <Footer >
  <FooterTab style={{backgroundColor: '#01444e'}}>


  <Button  vertical onPress={() => this.props.navigation.navigate('CompleteProfile')}>
    <Icon iconFamily="MaterialIcons" name="navigate-before" />
      <Text>Back</Text>
          </Button>
   
  <Button  vertical onPress={() => this.props.navigation.navigate('Home')}>
    <Icon name="home" />
      <Text>Home</Text>
          </Button>


          </FooterTab>
        </Footer>

      </Container>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: wp(5),
    fontWeight: 'bold',
  },
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
   marginTop: hp(-3),
},
responsiveBox: {
  width: wp('100%'),
  height: hp('100%'), 
  justifyContent:'center',
}, 
img:{
  flex: 1,
  width: wp('60%'),
  height: hp('30%'),
 marginLeft: wp(0),
 marginTop: hp(0),
},
txt: {
  fontSize :wp(5),
  fontWeight: '500',
  color: 'white',
  textAlign: 'center',
  marginBottom: hp(2),
  paddingHorizontal: wp(0)
  
},
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp(2),
    paddingVertical: hp(2),
    paddingHorizontal: wp(30),
    backgroundColor: '#8ad24e',
    marginBottom: hp(5),
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
});