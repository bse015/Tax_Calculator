import React, {Component} from 'react';  
import {View,Text, StyleSheet, } from 'react-native';    
import {Container, Footer, FooterTab, Button, Icon, Fab, Content, H1} from 'native-base';  

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation';

export default class SettingScreen extends Component{  
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

    render(){  
        return(  
            <Container style={styles.container}>  
            
                <Content>
          
          <Text style={styles.text1}>Income Tax Slabs</Text>
                   
           <Text style={styles.text2}>As per Federal Budget 2019-2020 presented by Government of Pakistan,
            following slabs and income taxrates will be applicable for salaried persons for the year 
            2019-2020:</Text>        
                   
           <Text style={styles.text3}>1- Where the taxable salary income does not exceed Rs. 600,000 
           the rate of income tax is 0%.</Text> 

           <Text style={styles.text3}>
           2- Where the taxable salary income exceeds Rs. 600,000 but does not exceed Rs. 
           1,200,000 the rate
            of income tax is 5% of the amount exceeding Rs. 600,000. </Text>         
                   
           <Text style={styles.text3}>
           3- Where the taxable salary income exceeds Rs. 1,200,000 but does not exceed Rs.
            1,800,000 the rate of income
           tax is Rs. 30,000 + 10% of the amount exceeding Rs. 1,200,000. </Text>          

           <Text style={styles.text3}>
          4- Where the taxable salary income exceeds Rs. 1,800,000 but does not exceed Rs.
           2,500,000 the rate of income tax is Rs.
           90,000 + 15% of the amount exceeding Rs. 1,800,000.
            </Text> 

            <Text style={styles.text3}>
         5- Where the taxable salary income exceeds Rs. 2,500,000 but does not exceed Rs.
          3,500,000 the rate of income tax is Rs.
             195,000 + 17.5% of the amount exceeding Rs. 2,500,000.
            </Text>   

            <Text style={styles.text3}>
            6- Where the taxable salary income exceeds Rs. 3,500,000 but does not exceed Rs.
             5,000,000 the rate of income tax is 
            Rs. 370,000 + 20% of the amount exceeding Rs. 3,500,000.
                  </Text> 

            <Text style={styles.text3}>
            7- Where the taxable salary income exceeds Rs. 5,000,000 but does not exceed Rs.
             8,000,000 the rate of income tax is 
            Rs. 670,000 + 22.5% of the amount exceeding Rs. 5,000,000. </Text>         
        
            <Text style={styles.text3}>
            8- Where the taxable salary income exceeds Rs. 8,000,000 but does not exceed Rs. 12,000,000 the
             rate of income tax is Rs. 1,345,000 + 25% of the amount exceeding Rs. 8,000,000. </Text>          

            <Text style={styles.text3}>
           9- Where the taxable salary income exceeds Rs. 12,000,000 but does not exceed Rs. 30,000,000 the
            rate of income tax is Rs. 2,345,000 + 27.5% of the amount exceeding Rs. 12,000,000.
            </Text> 

            <Text style={styles.text3}>
            10- Where the taxable salary income exceeds Rs. 30,000,000 but does not exceed Rs. 50,000,000 
            the rate of income tax is Rs. 7,295,000 + 30% of the amount exceeding Rs. 30,000,000.
            </Text>  

            <Text style={styles.text3}>
            11- Where the taxable salary income exceeds Rs. 50,000,000 but does not exceed Rs. 75,000,000 the rate
             of income tax is Rs. 13,295,000 + 32.5% of the amount exceeding Rs. 50,000,000.
            </Text>  

            <Text style={styles.text3}>
            12- Where the taxable salary income exceeds Rs. 75,000,000 the rate of income tax is Rs. 21,420,000
             + 35% of the amount exceeding Rs. 75,000,000.
            </Text>  

            
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
    text1: {
      color: 'white',
textAlign: 'center',
fontStyle: 'normal',
fontWeight: 'bold',
fontSize: wp(7),
textDecorationLine: 'underline',
padding: wp(6),
    },
    text2: {
      textAlign: 'center',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: wp(5),
      textDecorationLine: 'underline',
      marginHorizontal: wp(3),
      marginBottom: hp(2.5)
    },

    text3: {
      textAlign: 'justify',
      fontStyle: 'normal',
      fontWeight: '800',
      fontSize: wp(4.5),
      marginHorizontal: wp(7),
      marginVertical: hp(0.6)
       
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