import React, { Component } from 'react';
//Import React
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Share,
  KeyboardAvoidingView,
   TouchableOpacity,
} from 'react-native';
//Import basic react native components
import {Container, Header, Title, 
   Content,  Footer, FooterTab, Button, Left, Right, Body,
   Card  } from 'native-base';

   import {Icon } from 'react-native-elements'

   import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
 
  import Orientation from 'react-native-orientation';
  
  import MenuButton from './components/MenuButton';

  import {Avatar} from 'react-native-elements';
 

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



ItemSeparatorLine = () => {
  return (
    <View
    style={{ height: 3,width: wp(100),backgroundColor: "#111a0b",}}
    />
  );
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
           <Title>Agent profile</Title>
         </Body>
   
           </Header>
   
       <Content>
      
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
    
       <Text style= {styles.textContainer}>
       {this.props.navigation.state.params.JSON_ListView_Clicked_Item_name} Profile
            </Text>
       
       <Card style={styles.card1}>

<Card transparent style={styles.card}>

<Avatar
             rounded
             size={175}
             icon={{name: 'user', type: 'font-awesome'}}
             source={{
             uri: 'data:image/png;base64,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'
            }}
            showEditButton= {false}
            containerStyle={{
              flexDirection: 'row',
              marginLeft: wp(27),
              marginTop: -125, 
              marginBottom: 0,
              justifyContent: 'center'
              
            }}
          />
<View >
<Text style={styles.txt}>
{this.props.navigation.state.params.JSON_ListView_Clicked_Item_name}
</Text>

<Text  style={styles.txt1}>
  Tax Agent
</Text>
</View>

<View  style={{paddingVertical: 25}}>
<Text  style={styles.txt3}>
{this.props.navigation.state.params.JSON_ListView_Clicked_Item_about}
</Text>
<View
    style={{ height: 2,width: wp(93),backgroundColor: "#111a0b",}}
    />
</View>


<View style={{paddingVertical: 25}}>
<Text  style={styles.txt2}>
<Text style={{fontWeight: 'bold'}}>Email:   </Text>         {this.props.navigation.state.params.JSON_ListView_Clicked_Item_email} {"\n"}
<Text style={{fontWeight: 'bold'}}>Mobile:  </Text>        {this.props.navigation.state.params.JSON_ListView_Clicked_Item_phone} {"\n"}
<Text style={{fontWeight: 'bold'}}>Phone:   </Text>        {this.props.navigation.state.params.JSON_ListView_Clicked_Item_officephone} {"\n"}
<Text style={{fontWeight: 'bold'}}>Address:  </Text>      {this.props.navigation.state.params.JSON_ListView_Clicked_Item_officeaddress} {"\n"}
<Text style={{fontWeight: 'bold'}}>City:     </Text>                    {this.props.navigation.state.params.JSON_ListView_Clicked_Item_city} {"\n"}
<Text style={{fontWeight: 'bold'}}>Education:</Text>              {this.props.navigation.state.params.JSON_ListView_Clicked_Item_education} {"\n"}
<Text style={{fontWeight: 'bold'}}>Ratings:  </Text>                {this.props.navigation.state.params.JSON_ListView_Clicked_Item_rating}3.5/5 {"\n"}
</Text>
<View
    style={{ height: 2,width: wp(93),backgroundColor: "#111a0b",}}
    />
</View>

<Text style={{marginLeft: 12, marginTop: -50 ,textAlign: 'left', fontWeight: '500', fontSize: 15}}> 
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, backgroundColor: 'green',height: 50 }}
      onPress={() => this.props.navigation.navigate('RateAgent', {
        JSON_ListView_Clicked_Item_Email: this.props.navigation.state.params.JSON_ListView_Clicked_Item_email,
        JSON_ListView_Clicked_Item_Name : this.props.navigation.state.params.JSON_ListView_Clicked_Item_name
      }
        )}>
                 . Rate & Review Now .
</Text> 
                    

<Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, backgroundColor: 'blue',height: 50 }}
      onPress={this.ShareMessage}>
                    .  Share Agent Now .
</Text> 

                </Text>

</Card>

</Card>

 </KeyboardAvoidingView>
 
         </Content>
         <Footer >
  <FooterTab style={{backgroundColor: '#01444e'}}>
   

  <Button  vertical onPress={() => this.props.navigation.navigate('TaxAgent')}>
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
   paddingVertical: 25,
   marginBottom: hp(3)
},
img:{
  flex: 1,
  width: wp('75%'),
  height: hp('30%'),
 marginLeft: wp(0),
 marginTop: hp(4),
 paddingVertical: 25
},
txt: {
  fontSize :wp(7),
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: -60,
  marginLeft: wp(0),
  textDecorationLine: 'underline',
  paddingTop: 15
  
},
card:{
  width: wp('93%'),
  height: hp('75'),
  marginTop: 8,
  marginLeft: wp(1.5),
  marginBottom: 8,
  justifyContent: 'space-around',
  backgroundColor: 'white',

},
txt1: {
fontSize: wp(5),
fontWeight: '500',
color: '#01444e',
textAlign: 'center',
},
card1: {
  backgroundColor: '#01444e',
  width: wp('97%'),
  marginTop:  60,
},
txt2: {
  fontSize: wp(5),
  fontWeight: '500',
  color: '#01444e',
  textAlign: 'left',
  marginTop: -75,
  marginLeft: wp(5),
  lineHeight: 35
  },
  txt3: {
    fontSize: wp(5),
    fontWeight: '500',
    color: '#01444e',
    textAlign: 'center',
    marginTop: -60,
    marginBottom: 15,
    paddingHorizontal: wp(3)
    },
});