import React, { Component } from 'react';  
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import {Container,Fab, Header, Title,  Content, Button, Picker, 
    Footer, FooterTab,Left, Right, Body, Text ,Icon } from 'native-base';  
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

import Orientation from 'react-native-orientation';

import MenuButton from './components/MenuButton';
  
export default class First extends Component { 
    constructor(props) {
        super(props)
        this.state = {
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
  
  
    render() {  
      
        return ( 
            <Container style={styles.cntainer}>
            <Header style={{backgroundColor: '#01444e'}}>
              <Left >
                     <MenuButton navigation={this.props.navigation} />
               </Left>
         
               <Body>
                 <Title>Contact  Us</Title>
               </Body>
         
                 </Header>
         

             <Content>

      
             <KeyboardAvoidingView behavior="padding" style={styles.container}>

             <Text style= {styles.textContainer}>
               Contact Us
            </Text>

            <Image source = {{uri:'https://midataitsol.com/images/verticals/service.png'}}  
                       style = {styles.img}  
                />  


            <Text style= {styles.textContainer1}>  
               Our Location
            </Text>
          
            <Text style= {styles.textContainer2}>  
               COMSATS University Islamabad, 
               Lahore Campus.
            </Text>

            <Text style= {styles.textContainer1}>  
              Send Message On
            </Text>
          
            <Text style= {styles.textContainer2}>  
               sp16.bse.015@gmail.com    {'\n'}
               sp16-bse-059@cuilahore.edu.pk
            </Text>


            <Text style= {styles.textContainer1}>  
               Call Us On
            </Text>
          
            <Text style= {styles.textContainer3}>  
              (+92) 322 4061466  {'\n'}
              (+92) 304 6666009
            </Text>
            

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
            container: {  
                flex: 1,  
                backgroundColor: '#cc7d16',
                justifyContent: 'center',
                alignItems: 'center',
               
            }, 
            cntainer: {  
                flex: 1,  
                backgroundColor: '#cc7d16',
                justifyContent: 'flex-start', 
            },  
            responsiveBox: {
                width: wp('100%'),
                height: hp('100%'), 
                justifyContent:'center',
              },  
            img:{
                width: wp('80%'),
                height: hp('28%'),
                marginLeft: wp(-5),
            },
            textContainer: {
                textAlign: 'center',
               color: 'white',
               fontSize: wp(12),
               fontWeight: 'bold',
               marginHorizontal: wp(8),
               padding:  wp(5),
            },
            textContainer1: {
                textAlign: 'left',
               color: 'white',
               fontSize: wp(7),
               fontWeight: 'bold',
               marginTop: hp(2)
            },
            textContainer2: {
                textAlign: 'left',
               color: 'white',
               fontSize: wp(5),
               fontWeight: 'bold',
               marginLeft: wp(7)
            },
            textContainer3: {
                textAlign: 'left',
               color: 'white',
               fontSize: wp(5),
               fontWeight: 'bold',
               marginLeft: wp(0)
            },
        })  