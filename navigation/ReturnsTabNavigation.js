import React from 'react';  
import {createAppContainer} from 'react-navigation';  
import {createMaterialTopTabNavigator,} from 'react-navigation-tabs';

import Salaried from "../ReturnsDocuments/SalariedIndividuals";  
import Business from "../ReturnsDocuments/BusinessIndividuals";  
 

const AppNavigator = createMaterialTopTabNavigator(  
    {  
       ' Salaried Persons':   Salaried,
        'Business Person': Business,    
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

export default createAppContainer(AppNavigator);