import React from 'react';  
import {createAppContainer} from 'react-navigation';  
import {createMaterialTopTabNavigator,} from 'react-navigation-tabs';

import SalesTaxLaws from "../TaxLawsScreens/SalesTaxLaws";   
import IncomeTaxLaws from "../TaxLawsScreens/IncomeTaxLaws";  

const AppNavigator = createMaterialTopTabNavigator(  
    {  
       ' Sales Tax' :   SalesTaxLaws,
        'Income Tax' : IncomeTaxLaws,  
    },  
    {  
        tabBarOptions: {  
            activeTintColor: 'white',  
            showIcon: false,  
            showLabel:true,  
            style: {  
                backgroundColor:'#01444e'  
            }  
        },  
    }  
) 

export default createAppContainer(AppNavigator,);