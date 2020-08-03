import React, {Component} from 'react';  
import {View,Text, StyleSheet, } from 'react-native';    
import {Container, Footer, FooterTab, Button, Icon, Fab, Content, H1} from 'native-base';  

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

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
          
          <Text style={styles.text1}>Check List for Filing Tax Returns 2018 for Salaried Individual/Employed person</Text>
                   
           <Text style={styles.text2}>Compulsory documents required for 
           filling Tax returns or to become a filler</Text>        
                   
           <Text style={styles.text3}>o CNIC Copy</Text> 

           <Text style={styles.text3}>
           o Salary slips for past 12 months </Text>         
                   
           <Text style={styles.text3}>
           o Tax deduction certificate from Employer for past 12 months </Text>          

           <Text style={styles.text3}>
           o Bank A/c Statement for past 12 months
            </Text> 

            <Text style={styles.text3}>
            o List of personal Assets(including Value of these Assets and Liabilities 
            </Text>  

            <Text style={styles.text2}>Optional documents for Wealth Statement, Tax Credit, Deductible Allowances etc </Text> 

            <Text style={styles.text3}>
            o Prepaid/Postpaid Mobile Connection: Certificate of Tax deducted of past 12 months
                  </Text> 

            <Text style={styles.text3}>
            o Zakat Related: Certificate of Tax deducted of past 12 months </Text>         
        
            <Text style={styles.text3}>
            o Tax Deducted on Profit earned from P/L bank account: Certificate of Tax deducted July 2017 to June 2018  </Text>          

            <Text style={styles.text3}>
            o Utility Bills if under the name of Tax filer (PTCL, Electricity, Internet)
            </Text> 

            <Text style={styles.text3}>
            o Charitable Donations 
            </Text>  

            <Text style={styles.text3}>
            o Investment in any of the following: Insurance, Shares of Public Company, Pension Fund, Securities etc
            </Text>  

            <Text style={styles.text3}>
            o Airline Ticket Payment [Domestic/International]
            </Text>  

            <Text style={styles.text3}>
            o Educational expenses [Domestic/International] 
            </Text> 

            <Text style={styles.text3}>
            o Tax on Cash Withdrawal from a Bank: Certificate of Tax deducted July 2017 to June 2018
            </Text> 

            <Text style={styles.text3}>
            o Advance tax on transactions in bank: : Certificate of Tax deducted July 2017 to June 2018             
            </Text> 

            <Text style={styles.text3}>
            o Advance Tax on Transfer of Registration or ownership of Private motor vehicle           
            </Text> 

            <Text style={styles.text3}>
            o Advance Tax on Registering, Purchase, Sale, Transfer of immovable property
            </Text> 

            <Text style={styles.text3}>
            o Advance tax on insurance premium, Functions / Gatherings
            </Text> 

            <Text style={styles.text3}>
            o Tax Reduction for: Senior Citizen, Disabled Person, Teacher of Public/Gov institute 
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
fontSize: wp(5.5),
textDecorationLine: 'underline',
padding: wp(7),
    },
    text2: {
      textAlign: 'center',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: wp(4.5),
      textDecorationLine: 'underline',
      marginHorizontal: wp(3)
    },

    text3: {
      textAlign: 'left',
      fontStyle: 'normal',
      fontWeight: '800',
      fontSize: wp(4),
      marginHorizontal: wp(10),
      marginVertical: hp(0.5)
       
    },

    text4: {
      textAlign: 'center',
      fontStyle: 'normal',
      fontWeight: '800',
      fontSize: wp(4),
      marginHorizontal: wp(13),
      marginVertical: hp(2),
      color: 'white',
       
    },
          
}
);