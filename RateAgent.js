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
import {
  Container,
  Header,
  Title, 
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Body,   
} from 'native-base';

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
    email: '',
    suggestion: 'optional',
    Default_Rating: 3,
    Max_Rating: 5,
    emailValidator: true,
    subjectValidator: true,
    suggestionValidator: true,
    reviewerEmail: '',
  };
  //Filled Star. You can also give the path from local
  this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  //Empty Star. You can also give the path from local
  this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
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
 
  

  UpdateRating(key) {
    this.setState({ Default_Rating: key });
    //Keeping the Rating Selected in state
  }



  feedback = () =>{
    console.log('getting data from fetch+++++++++++++++++++++++++')
    if (this.state.reviewerEmail != '') {
  fetch('http://167.71.64.243:9090/userLogin/addReview ', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  "reviewerEmail": this.state.reviewerEmail,
  "agentEmail": this.props.navigation.state.params.JSON_ListView_Clicked_Item_Email,
  "feedback": this.state.suggestion,
  "rating" : this.state.Default_Rating,
    }
    )},)
    .then((response) => response.json())
    .then((json) => {
      if(json.success === true )
      {
        Alert.alert(
          'Thanks For your response',
     'We consider your responce, it will help others for future work and we also contact with you if required.\n Thank you',
           );
    }
    else{
      Alert.alert(
        'Try Later !',
   'Unfortunately Rate & Review is not Submitted ',
         );
    }
     console.log('getting data from fetch => ',json.data.user)
    })
    .catch((error) => {
      console.error(error);
    });
} else {
  Alert.alert(
    'Please Enter Your Email',
    
  );
}
}



          
  validateEmail = (text) => {
    console.log(this.state.reviewerEmail)
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



  validateSuggestion = (text) => {
    console.log(text);
  let reg =  /^[a-zA-Z0-9.,][a-zA-Z0-9.,-\s]*$/;
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

    let React_Native_Rating_Bar = [];
    //Array to hold the filled or empty Stars
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.Default_Rating
                ? { uri: this.Star }
                : { uri: this.Star_With_Border }
            }
          />
        </TouchableOpacity>
      );
    }

    return (
      <Container style={styles.cntainer}>
      <Header style={{backgroundColor: '#01444e'}}>
        <Left >
               <MenuButton navigation={this.props.navigation} />
         </Left>
   
         <Body>
           <Title>Rate & Review Tax Agent</Title>
         </Body>
   
      
   
           </Header>
   
       <Content>
      
       <KeyboardAvoidingView behavior="padding" style={styles.container}>

       <Text style= {styles.textContainer}>
           Rate & Review {"\n"}
            </Text>

            <Text style={styles.txt}>How was your experience with '{this.props.navigation.state.params.JSON_ListView_Clicked_Item_Name}'</Text>

            <View style={styles.childView}>{React_Native_Rating_Bar}</View>
        <Text style={styles.txt1}>
        {/*To show the rating selected*/}
          {this.state.Default_Rating} / {this.state.Max_Rating}
        </Text>


        <View style={[styles.inputContainer, 
           {borderColor: !this.state.emailValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnexF_wWejP4MmEzNsP48eXWmgfhs__gunUrM3LKX_IWc-44I&s'}}/>
          <TextInput style={styles.inputs}
              placeholder="Enter Your Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.validateEmail(text)}/>
        </View>


        <View style={[styles.inputContainer1, 
           {borderColor: !this.state.suggestionValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon1} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgkPbIoUoiu4TzOFfc8oyA34M07dYcMWShAlkfHpwGrZpGI-p&s'}}/>
          <TextInput style={styles.inputs1}
              placeholder="Type Here (Optional)"
              keyboardType="default"
              underlineColorAndroid='transparent'
              multiline= {true}
              maxLength= {200}
              onChangeText={(text) => this.validateSuggestion(text)}  />
        </View>


        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={this.feedback}>
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
    padding: 20,
  },
  button: {
    width: wp('80%'),
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#00BCD4',
    borderRadius: 7,
    marginTop: 20,
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: wp(6),
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
StarImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    margin: 3
  },
textContainer: {
    textAlign: 'center',
   color: 'white',
   fontSize: wp(8),
   fontWeight: 'bold',
   marginTop: hp(1.5),
   textDecorationLine: 'underline',
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
  marginTop: hp(-3.5)
  
},
txt1: {
  fontSize :wp(5),
  fontWeight: '500',
  color: 'white',
  textAlign: 'center',
  marginBottom: hp(1.5),
  marginTop: hp(1)
  
},
childView: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp(1),
    marginRight: wp(3)
  },
  // button: {
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  //   marginTop: hp(3),
  //   paddingVertical: hp(2),
  //   paddingHorizontal: wp(20),
  //   marginBottom: hp(3),
  //   backgroundColor: '#8ad24e',
  // },
inputContainer: {
  borderColor: 'orange',
  backgroundColor: '#FFFFFF',
  borderRadius:30,
  borderWidth: 5,
  width:wp(80),
  height:hp(7),
  marginBottom:wp(4),
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