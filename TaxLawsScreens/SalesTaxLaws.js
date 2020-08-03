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
          
          <Text style={styles.text1}>Sales Tax </Text>
                   
           <Text style={styles.text2}>Pakistani sales tax registration</Text>        
                   
           <Text style={styles.text3}>Suppliers of taxable transactions can register
            for sales tax via an online portal, FBR, and will generally require a face-to-face
             meeting with the tax office. For the application, the following is required:</Text> 

           <Text style={styles.text3}>
           1- Business names </Text>         
                   
           <Text style={styles.text3}>
           2- Address
           </Text>          

           <Text style={styles.text3}>
          3 Bank accounts
            </Text> 

            <Text style={styles.text3}>
         4- Tax identification of directors and owners
            </Text>   

            <Text style={styles.text3}>
            5- Passports of directors
                  </Text> 

            <Text style={styles.text3}>
            Failure to register may result in fines of PKR10,000 and 5% of the Sales Tax not declared 
            </Text>         
        
            <Text style={styles.text3}>
            There is no scope for group sales tax registrations. There is also no scope for voluntary 
            registration for federal sales tax. However, provinces will permit voluntary sales tax registrations.
             </Text>          

             <Text style={styles.text2}>Sales tax rates in Pakistan</Text>   

            <Text style={styles.text3}>
            The standard sales tax rate in Pakistan is 17%.
            </Text> 

            <Text style={styles.text3}>
            Exporters and certain providers of financial services may apply for a Sales Tax suspension.
             Imports of some basic foodstuffs and agricultural supplies are exempt from import Sales Tax.
            </Text>  

            <Text style={styles.text3}>
            Calculated at 20% of the sales tax withholding regime, there is an anti-fraud measure which
             may be applied for certain customers – generally public authorities paying their customers. 
             The same is applicable for advertising services, including for non-resident suppliers. 
             In these cases, the taxpayer must be a registered Withholding Agent.
            </Text>  

            <Text style={styles.text2}>Pakistani sales tax compliance</Text> 

            <Text style={styles.text3}>
            Pakistani sales tax registered businesses must produce a tax invoice. Simplified invoices
             are permitted for retail sales. Invoices should include the following details:
            </Text>  

            <Text style={styles.text3}>
           1- Name, address of the supplier
            </Text>         
                   
           <Text style={styles.text3}>
           2- Tax number of the supplier
           </Text>          

           <Text style={styles.text3}>
          3- Name, address of the customer
            </Text> 

            <Text style={styles.text3}>
         4- Date of supply
            </Text>   

            <Text style={styles.text3}>
            5- Unique invoice number
                  </Text> 

                  <Text style={styles.text3}>
            6- Description of the goods or services provided
                  </Text> 

                  <Text style={styles.text3}>
            7- Sales tax rate, amount charged and gross amount of the invoice
                  </Text> 

                  <Text style={styles.text3}>
            8- Foreign currency amount must be translated into PKR at a public exchange rate.
                  </Text> 

                  <Text style={styles.text2}>Time of supply rules in Pakistan</Text> 

                  <Text style={styles.text3}>
                  Sales tax becomes due at the time of supply. For services, this is generally the earlier of when 
                  the taxable supply is provided, or payment made. For goods, it is generally the point when the
                  invoice is settled with a payment.
                  </Text>  

                  <Text style={styles.text3}>
                  Tax on imports is due at the time of customs clearance into Pakistan.
                  </Text> 

                  <Text style={styles.text2}>Pakistani sales tax returns</Text> 

                  <Text style={styles.text3}>
                  Pakistani sales tax returns are due on a monthly basis. For incorporated businesses,
                   they should be submitted by the 18th of the month following the reporting period.
                    However, any tax due must be paid by the 15th of the month following the reporting
                     period end. An annual return is due, too, by 30 September of the following year.
                  </Text>  

                  <Text style={styles.text3}>
                  Returns are filed online
                  </Text> 

                  <Text style={styles.text2}>Pakistani sales tax recovery by non-residents</Text> 

                  <Text style={styles.text3}>
                  Non-resident businesses may not reclaim Pakistani sales tax incurred unless they
                   are sales tax registered.
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