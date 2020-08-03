import React, { Component } from 'react';

//Import React
import {
  StyleSheet,
  Text,
  Share,
  KeyboardAvoidingView,
   Image,
   TouchableOpacity,
} from 'react-native';

//Import basic react native components
import {Container, Header, Title, Content,  Footer, FooterTab,
                 Button, Left, Body, Icon, } from 'native-base';

   import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

  import Orientation from 'react-native-orientation';
  
  import MenuButton from './components/MenuButton';


 
 
export default class Myapp extends Component {

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

  ShareMessage = () => {
    //Here is the Share API 
    Share.share({
      message: "Hey, I found very usefull application about tax. I also find an efficient Tax Agent from it. You can also use it by clicking on the link : 'https://google.com' " ,
    })
    //after successful share return result
    .then(result => console.log(result))
    //If any thing goes wrong it comes here
    .catch(errorMsg => console.log(errorMsg));
  };



  render() {
    return (
 

  <Container style={styles.cntainer}>
  <Header style={{backgroundColor: '#01444e'}}>
    <Left >
           <MenuButton navigation={this.props.navigation} />
     </Left>

     <Body>
       <Title>Invite a Friend</Title>
     </Body>

  

       </Header>

   <Content>

   <KeyboardAvoidingView behavior="padding" style={styles.container}>

     
     <Image source= {{uri: 'https://smarttax.id/wp-content/uploads/2019/02/Logo-SmartTax-atas.png'}}
     style = {styles.img}/>

   <Text style= {styles.textContainer}>
          Share Us 
        </Text>


        <Text style= {styles.textContainer}>
         With your Friends
        </Text>


        <TouchableOpacity
     onPress={this.ShareMessage}
      activeOpacity={0.6}
      style={styles.button}>
      <Text style={styles.TextStyle}>Share Now !</Text>
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
paddingTop: hp(2),
paddingBottom: hp(2),
backgroundColor: '#00BCD4',
borderRadius: 7,
marginTop: hp(7),
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
fontSize: wp(9),
fontWeight: 'bold',
marginBottom: hp(1)
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



  



 