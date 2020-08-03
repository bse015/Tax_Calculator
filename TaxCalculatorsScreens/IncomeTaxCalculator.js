import React, { Component } from 'react';
import { Alert,Text,Image, View,  StyleSheet, KeyboardAvoidingView,TouchableOpacity, TextInput,} from 'react-native';
import {Container, Content, Footer, FooterTab, Fab, Button , Icon, } from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation';



export default class HomeScreen extends Component{ 
    constructor(props)
    {
      super(props);
      this.state={
        income: '', 
        mtax: '0', 
        ytax: '0',
        yincome: '0',
        mincome: '0',
        incomeValidator: true,
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



  
  validateIncome = (text) => {
    console.log(text);
    let reg = /^[0-9]*$/;
    if (reg.test(text)) {
      console.log("Sales is Correct");
      this.setState({
         incomeValidator: true, 
         income : text
         })
    }
    else {
      console.log("Sales is Not Correct");
      this.setState({ 
        incomeValidator: false 
      })
      
    }
  }



    render() {  

      var income= (this.state.income) *12;
     if(income<600000){

      var  mincome = income ?  income / 12 : null;
     var  ytax = income ?  income * 0.0 : null;
     var  yincome = income ?  income * 1 : null;
     var  mtax = ytax ?  ytax / 12 : null;

     }
     else if(income>=600000 && income <1200000 )
     {
      var  mincome = income ?  income / 12 : null;
      var  ytax = income ?  (income-600000) * 0.05  : null;
      var  yincome = income ?  income * 1 : null;
      var  mtax = ytax ?  ytax / 12 : null;

     }
     else if(income>=1200000 && income <1800000 )
     {
      var  mincome = income ?  income / 12 : null;
      var  ytax = income ?  (income-1200000) * 0.10 + 30000  : null;
      var  yincome = income ?  income * 1 : null;
      var  mtax = ytax ?  ytax / 12 : null;

     }
    else if(income>=1800000 && income <2500000){

      var  mincome = income ?  income / 12 : null;
      var  ytax = income ?  (income - 1800000) * 0.15 + 90000 : null;
      var  yincome = income ?  income * 1 : null;
      var  mtax = ytax ?  ytax / 12 : null;

    }
    else if(income>=2500000 && income <3500000){

      var  mincome = income ?  income / 12 : null;
      var  ytax = income ?  (income - 2500000) * 0.175 + 195000 : null;
      var  yincome = income ?  income * 1 : null;
      var  mtax = ytax ?  ytax / 12 : null;

    }
    else if(income>=3500000 && income <5000000){

      var  mincome = income ?  income / 12 : null;
      var  ytax = income ?  (income - 3500000) * 0.20 + 370000 : null;
      var  yincome = income ?  income * 1 : null;
      var  mtax = ytax ?  ytax / 12 : null;

    }
    else if(income>=5000000 && income <8000000){

      var  mincome = income ?  income / 12 : null;
      var  ytax = income ?  (income - 5000000) * 0.225 + 67000 : null;
      var  yincome = income ?  income * 1 : null;
      var  mtax = ytax ?  ytax / 12 : null;

    }
    else if(income>=8000000 && income <12000000){

      var  mincome = income ?  income / 12 : null;
      var  ytax = income ?  (income - 8000000) * 0.25 + 1345000 : null;
      var  yincome = income ?  income * 1 : null;
      var  mtax = ytax ?  ytax / 12 : null;

    }
    else if(income>=12000000 && income <30000000){
     
      var  mincome = income ?  income / 12 : null;
      var  ytax = income ?  (income - 12000000) * 0.275 + 2345000 : null;
      var  yincome = income ?  income * 1 : null;
      var  mtax = ytax ?  ytax / 12 : null;

    }
    else if(income>=300000000 && income <50000000){

      var  mincome = income ?  income / 12 : null;
      var  ytax = income ?  (income - 30000000) * 0.30 + 7295000 : null;
      var  yincome = income ?  income * 1 : null;
      var  mtax = ytax ?  ytax / 12 : null;
    }
    else if(income>=50000000 && income <75000000){

      var  mincome = income ?  income / 12 : null;
      var  ytax = income ?  (income - 50000000)  * 0.325 + 13295000 : null;
      var  yincome = income ?  income * 1 : null;
      var  mtax = ytax ?  ytax / 12 : null;
    }
    else if(income>=75000000) {

      var  mincome = income ?  income / 12 : null;
      var  ytax = income ?  (income - 75000000)  * 0.35 + 21420000 : null;
      var  yincome = income ?  income * 1 : null;
     var  mtax = ytax ?  ytax / 12 : null;
    }


        return(  
        
            <Container style={styles.container}>  
           
            <Content>
            <ScrollView>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.text}>Income Tax Calculator</Text>

<Image source = {{uri:'https://as1.ftcdn.net/jpg/01/78/90/84/500_F_178908444_aptFGV87P6ur0IFMSwFFlznUCbDe70nX.jpg'}}  
style = {styles.img}  
/>

<Text style={styles.text1}>This is latest tax calculator as per 
2019-2020 budget presented by PTI government.</Text>


          <View style={[styles.inputContainer, 
          {borderColor: !this.state.incomeValidator? 'red':'orange'}]}>
          <Image style={styles.inputIcon} source={{uri: 'https://www.emoji.co.uk/files/google-emojis/symbols-android/8107-input-symbol-for-numbers.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Enter monthly Salary"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={text => this.validateIncome(text)}/>

        </View>
        
        
     <View>
     <Text style={styles.text2}>Results </Text>

        { mincome ? <Text style={styles.result}>Monthly Income:: {"\n"} { mincome }</Text> :
                    <Text style={styles.result}>Monthly Income:: {"\n"} { this.state.mincome }</Text> }
        { mtax ? <Text style={styles.result}>Monthly Tax:: {"\n"} { mtax }</Text> : 
               <Text style={styles.result}>Monthly Tax:: {"\n"} 0 </Text> }
        { yincome ? <Text style={styles.result}>Yearly Income::{"\n"} { yincome }</Text> :
                   <Text style={styles.result}>Yearly Income:: {"\n"} { this.state.yincome }</Text> }
        { ytax ? <Text style={styles.result}>Yearly Tax:: {"\n"} { ytax }</Text> : 
                  <Text style={styles.result}>Yearly Tax:: {"\n"} 0 </Text> }

        </View>
        
        </KeyboardAvoidingView>
        </ScrollView>
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