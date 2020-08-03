import React, { Component } from 'react';
//Import React
import {
  Platform,
  StyleSheet,
  View,
  Linking,
  Text,
  Alert,
  KeyboardAvoidingView,
   Image,
   TouchableOpacity,
} from 'react-native';
//Import basic react native components
import {Container,Fab, Header, Title, 
   Content, Picker, Footer, FooterTab, Button, Left, Right, Body,
   Card, CardItem ,Icon, } from 'native-base';

   import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
 
  import Orientation from 'react-native-orientation';
  
  import MenuButton from './components/MenuButton';
 
const GOOGLE_PACKAGE_NAME = 'umer.yourfeedback';
 
export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      count: 0 ,
    active: false
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


  componentDidMount() {
    this.startRatingCounter();
  }
 
  startRatingCounter = () => {
    //Initialize count by 5 to start counter for 5 sec
    this.setState({ count: 1 });
    let t = setInterval(() => {
      this.setState({ count: this.state.count - 1 });
      if (this.state.count == 0) {
        clearInterval(t);
        //After 5 second ask for the rate this app
        Alert.alert(
          'Rate us',
          'Would you like to share your experience with us? This will help and motivate us a lot.',
          [
            { text: 'Sure', onPress: () => this.openStore() },
            {
              text: 'No Thanks!',
              onPress: () => console.log('No Thanks Pressed'),
              style: 'cancel',
            },
          ],
          { cancelable: false }
        );
      }
    }, 1000);
  };
 
  openStore = () => {
    //This is the main trick
    if (Platform.OS != 'ios') {
      Linking.openURL(`market://details?id=${GOOGLE_PACKAGE_NAME}`).catch(err =>
        alert('Please check for the Google Play Store')
      );
    } else {
      Linking.openURL(
        `itms://itunes.apple.com/in/app/apple-store/${APPLE_STORE_ID}`
      ).catch(err => alert('Please check for the App Store'));
    }
  };
 
  render() {
    return (
      <Container style={styles.cntainer}>
      <Header style={{backgroundColor: '#01444e'}}>
        <Left >
               <MenuButton navigation={this.props.navigation} />
         </Left>
   
         <Body>
           <Title>Rate Application</Title>
         </Body>
   
      
   
           </Header>
   
       <Content>
      
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
    
         
         <Image source= {{uri: 'https://smarttax.id/wp-content/uploads/2019/02/Logo-SmartTax-atas.png'}}
         style = {styles.img}/>

       <Text style= {styles.textContainer}>
               Rate Us
            </Text>

            <Text style= {styles.txt}>
               We are trying our best to make our app efficient for you.
               Kindly share your experience with us about our app by giving the rating to us. 
               It will help and motivate us to improve our product and make necessary updations.
               We are very thankfull to you for this.
            </Text>

            <TouchableOpacity
          onPress={this.startRatingCounter}
          activeOpacity={0.6}
          style={styles.button}>
          <Text style={styles.TextStyle}>Rate Now !</Text>
        </TouchableOpacity>
        


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
    fontSize: wp(5)
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
   fontSize: wp(10),
   fontWeight: 'bold',
},
responsiveBox: {
  width: wp('100%'),
  height: hp('100%'), 
  justifyContent:'center',
}, 
img:{
  flex: 1,
  width: wp('75%'),
  height: hp('30%'),
 marginLeft: wp(0),
 marginTop: hp(4),
},
txt: {
  fontSize :wp(5),
  fontWeight: '500',
  color: 'white',
  textAlign: 'justify',
  marginBottom: hp(0),
  
}
});