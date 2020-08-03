import React, {Component} from 'react';  
import {StyleSheet, Text, View,StatusBar} from 'react-native';  
import {createAppContainer} from 'react-navigation';  
  
import AppNavigator from './navigation/TabNavigation'; 
import MenuButton1 from './components/MenuButton1'; 
const AppIndex = createAppContainer(AppNavigator)  
  
export default class TaxLaws extends Component{
    

    render(){  
        return(  
            <View style={{flex:1}} >  
                <StatusBar  
                    backgroundColor='#01444e'  
                    barStyle='light-content'  
                />  
                <View style={styles.header}> 

                <MenuButton1  navigation={this.props.navigation} />
                <Text style={{marginLeft: 100,fontWeight: 'bold', fontSize:24,
                 marginTop:10, color: 'white', textAlign: 'center'}}>
                      Tax Laws 
                      </Text>
                     
                </View> 
               
                <AppIndex/>  
            </View>  
                       
                                
        );
    }  
}  
const styles = StyleSheet.create({  
    wrapper: {  
        flex: 1,  
    },  
    header:{  
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'space-between',  
        backgroundColor: '#01444e',  
        paddingHorizontal: 25,   
    }  
});  