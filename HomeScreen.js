import React, { Component } from 'react';
import {  StyleSheet, View, Image,StatusBar } from 'react-native'; 
import {Container,Fab, Header, Title, Content, Footer, FooterTab, Button, 
            Left, Right, Body, Text, Card, CardItem ,Icon } from 'native-base';  

  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

import Orientation from 'react-native-orientation';

import MenuButton from './components/MenuButton';

import {StackActions ,NavigationActions} from 'react-navigation';


export default class HomeScreen extends Component {

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



  constructor() {
    super();
    this.state = { 
    active: false
  };
  }

  
  render() {
    
  
    return (
      
<Container style={styles.container}>

<StatusBar  
                    backgroundColor='#01444e'  
                    barStyle='light-content'  
                /> 

   <Header style={{backgroundColor: '#01444e'}}>
     <Left >
            <MenuButton navigation={this.props.navigation} />
      </Left>

      <Body>
        <Title style={{marginLeft: wp(10),fontWeight: 'bold',
         fontSize:wp(5), marginTop:0}}>
           Smart Tax 
           </Title>
      </Body>


      <Right >
       <Button  transparent
          onPress={() => this.props.navigation.navigate('Logout')} 
      >
      <Text style={{marginLeft: wp(6),fontWeight: 'bold', fontSize:wp(4),
       marginTop:5, textDecorationLine: 'underline'}} >
         Log Out
         </Text>
          </Button>
  
</Right>

        </Header>


    <Content>

            {/* Card 1 */}
          <Button  onPress={() => this.props.navigation.navigate('TaxLaws')} 
          style={styles.btn1}>
        <Card style={styles.card} >
            <CardItem >
              <Image style={styles.inputIcon} 
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhwp-BaBzhy-dmVC3CAU9qbSwImYPPTsgFAR3KQ6_KTmyY1hn&s'}}/>
            </CardItem>
           <Right><Text style={styles.text}>Tax Laws Of Pakistan</Text></Right>
          </Card>
          </Button>
        

         {/* Card 2 */}
        <Button onPress={() => this.props.navigation.navigate('TaxCalculator')} 
          style={styles.btn2}>
        <Card style={styles.card1} >
            <CardItem >
              <Image style={styles.inputIcon} 
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9u8F5omsQdMVoNLso0ETkT8WaruIcw0OBqLZd6a52QiShNFpD&s'}}/>
            </CardItem>
           <Right><Text style={styles.text}>Tax Calculators</Text></Right>
          </Card>
          </Button>


          
          {/* Card 3 */}
          <Button onPress={() => this.props.navigation.navigate('ReturnsDocuments')} 
          style={styles.btn1}>
        <Card style={styles.card} >
            <CardItem >
              <Image style={styles.inputIcon} 
              source={{uri: 'data:image/png;base64,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'}}/>
            </CardItem>
           <Right><Text style={styles.text}>Tax Returns Document </Text></Right>
          </Card>
          </Button>
    
        
        {/* Card 4 */}
        <Button onPress={() => this.props.navigation.navigate('TaxAgent')} 
          style={styles.btn2}>
        <Card style={styles.card1} >
            <CardItem >
              <Image style={styles.inputIcon} 
              source={{uri: 'data:image/png;base64,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'}}/>
            </CardItem>
           <Right><Text style={styles.text}>Tax Agents</Text></Right>
          </Card>
          </Button>


          {/* Card 5 */}
          <Button onPress={() => this.props.navigation.navigate('RateUs')} 
          style={styles.btn1}>
        <Card style={styles.card} >
            <CardItem >
              <Image style={styles.inputIcon} 
              source={{uri: 'https://cdn2.iconfinder.com/data/icons/large-svg-icons/512/rating_eating_vector_icon-512.png'}}/>
            </CardItem>
           <Right><Text style={styles.text}>Rate Us</Text></Right>
          </Card>
          </Button>
    
        
        {/* Card 6 */}
        <Button onPress={() => this.props.navigation.navigate('Feedback')} 
          style={styles.btn2}>
        <Card style={styles.card1} >
            <CardItem >
              <Image style={styles.inputIcon} 
              source={{uri: 'https://cdn2.iconfinder.com/data/icons/miscellanea-set-4/100/.svg-19-512.png'}}/>
            </CardItem>
           <Right><Text style={styles.text}>Suggestions/Feedback</Text></Right>
          </Card>
          </Button>


         {/* Card  7*/}
         <Button onPress={() => this.props.navigation.navigate('ContactUs')} 
          style={styles.btn1}>
        <Card style={styles.card} >
            <CardItem >
              <Image style={styles.inputIcon} 
              source={{uri: 'https://www.pinclipart.com/picdir/middle/10-107421_telephone-clipart-contact-detail-phone-number-icon-png.png'}}/>
            </CardItem>
           <Right><Text style={styles.text}>Contact Us</Text></Right>
          </Card>
          </Button>
    
        
                             {/* Card 8 */}
  <Button onPress={() => this.props.navigation.navigate('InviteFriend')} 
  style={styles.btn2}>
    <Card style={styles.card1} >
        <CardItem >
              <Image style={styles.inputIcon} 
            source={{uri: 'https://thumbs.dreamstime.com/b/add-friend-icon-hospital-logo-vector-add-friend-icon-hospital-logo-stock-vector-151435944.jpg'}}/>
        </CardItem>
      <Right><Text style={styles.text}>Invite a Friend</Text></Right>
    </Card>
  </Button>


</Content>

                     {/*Footer of the Page*/ }
                         
<Footer >
  <FooterTab style={{backgroundColor: '#01444e'}}>
  
  <Button  vertical onPress={() => this.props.navigation.navigate('Home')}>
    <Icon name="md-home" />
      <Text>Home</Text>
          </Button>

          </FooterTab>
        </Footer>

      </Container>
    );
  }
}



const styles = StyleSheet.create({  
  container: {   
    flex: 1,
      backgroundColor: '#cc7d16',
      justifyContent: 'space-between', 
     
  },  
  inputIcon:{
    width:wp('20%'),
    height: hp(10),
    marginLeft: wp('8%'),
    justifyContent: 'center'
    },
    card:{
         width: wp('42%'),
         height: hp('21%'), 

    },
    btn1:{
      width: wp('43%'),
      height: hp('22%'),
      marginLeft: wp('5%'),
      marginTop: hp(5),
    },
    text:{
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
    btn2:{
      width: wp('43%'),
      height: hp('22%'),
      marginLeft: wp('51%'),
         marginTop : hp(-22),
    },
    card1:{
      width: wp('42%'),
      height: hp('21%'), 
    },
});