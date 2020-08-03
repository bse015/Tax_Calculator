import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import First from './First';
import Login from './Login';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';
import Feedback from './Feedback';
import Home from './Home';
import HomeScreen from './HomeScreen';
import Logout from './Logout';
import Loading from './Loading';

const AppNavigator = createStackNavigator({
  First: { screen: First,
    navigationOptions: {
      header: null,
    }
  },
  Loading: { 
    screen: Loading
  },
  Login:
   { 
     screen: Login 
    },
  Signup: 
  { 
    screen: Signup
   },
  ResetPassword:
   {
     screen: ResetPassword
    },
  Feedback:
   {
     screen: Feedback
    },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  HomeScreen: 
  { 
    screen: HomeScreen
  },
  ForgetPassword:
   {
     screen: ForgetPassword
    },   
    Logout: {
			screen: Logout
		},
},
{
  initialRouteName: 'First',
}
);

export default createAppContainer(AppNavigator);