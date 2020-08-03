import React, { Component } from 'react';

import { Text,Image, View,  StyleSheet, 
          KeyboardAvoidingView, TextInput,} from 'react-native';

import {Container, Content, Footer, FooterTab, } from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import Orientation from 'react-native-orientation';



export default class HomeScreen extends Component{ 
    constructor(props)
    {
      super(props);
      this.state={
        sales: 0, 
        result: 0,
        salesValidator: true,
      }
     
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



  
  validateSales = (text) => {
    console.log(text);
    let reg = /^[0-9]*$/;
    if (reg.test(text)) {
      console.log("Sales is Correct");
      this.setState({
         salesValidator: true, 
         sales: text
         })
    }
    else {
      console.log("Sales is Not Correct");
      this.setState({ 
        salesValidator: false 
      })
      
    }
  }
    

    render() {  


      var sales= (this.state.sales);
      const result = sales ?  sales * 0.17 : null;


        return(  
            <Container style={styles.container}>  
            
            <Content>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.text}>Sales Tax Calculator</Text>

<Image source = {{uri:'https://as1.ftcdn.net/jpg/01/78/90/84/500_F_178908444_aptFGV87P6ur0IFMSwFFlznUCbDe70nX.jpg'}}  
style = {styles.img}  
/>


<Text style={styles.text1}>Please enter your total Sales to Calculate the Sales Tax accurately</Text>


          <View style={[styles.inputContainer, 
          {borderColor: !this.state.salesValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'https://www.emoji.co.uk/files/google-emojis/symbols-android/8107-input-symbol-for-numbers.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Enter Total Sale"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              clearButtonMode= 'always'
              onChangeText={text => this.validateSales(text)}/>

        </View>
        
        
     <View>
     <Text style={styles.text2}>Results  </Text>

        { result ? <Text style={styles.result}>Sales Tax:: { result }</Text> : 
              <Text style={styles.result}>Sales Tax:: { this.state.result }</Text> }

        </View>
        
        </KeyboardAvoidingView>
        
                </Content>                        
        <Footer >
        <FooterTab style={{backgroundColor: '#01444e'}}>
            <Text style= {styles.text4}>Developed by: Muhammad Umer </Text> 
                  </FooterTab>
                </Footer>
                
                </Container> 


    )  
}  
}  


const styles = StyleSheet.create({
container: {  
    flex: 1,  
    backgroundColor: '#cc7d16',
    justifyContent: 'flex-start', 
},  
img:{
  width: wp('50%'),
  height: hp('25%'),
 marginLeft: wp(25),
 marginBottom: hp(1),
 marginTop: hp(3),
 borderRadius: 25,
},
text: {
  fontSize: wp(7),
  fontWeight: 'bold',
  marginLeft: wp(0),
  marginTop: hp(3),
  color: 'white',
  textAlign: 'center',

},
text1: {
  fontSize: wp(5),
  fontWeight: 'bold',
  margin: wp(3),
  textAlign: 'center',

},
inputContainer: {
  borderColor: 'orange',
  backgroundColor: '#FFFFFF',
  borderRadius:30,
  borderWidth: 5,
  width:wp(85),
  height:hp(7),
  marginBottom:hp(4),
  marginTop: hp(4),
  marginLeft: wp(7),
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
result: {
  fontSize: wp(5),
  fontWeight: 'bold',
  marginVertical: hp(2),
  marginLeft: wp(-2),
  textAlign: 'center',

},
text2: {
  fontSize: wp(8),
  fontWeight: 'bold',
  marginLeft: wp(0),
  marginTop: hp(-1),
  color: 'white',
  textAlign: 'center',

},
text4: {
  textAlign: 'center',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: wp(4),
  marginHorizontal: wp(14),
  marginVertical: hp(2),
  color: 'white',
   
},
}
);