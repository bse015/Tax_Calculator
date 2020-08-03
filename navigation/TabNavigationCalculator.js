import React from 'react';  
import {createAppContainer} from 'react-navigation';  
import {createMaterialTopTabNavigator,} from 'react-navigation-tabs';

import SalesTaxCalculator from "../TaxCalculatorsScreens/SalesTaxCalculator";  
import IncomeTaxCalculator from "../TaxCalculatorsScreens/IncomeTaxCalculator";  
  
const CalcNavigator = createMaterialTopTabNavigator(  
    {  
        ' Sales Tax':   SalesTaxCalculator,
        'Income Tax' :  IncomeTaxCalculator,  
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
export default createAppContainer(CalcNavigator);