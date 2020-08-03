import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';


import MenuDrawer from '../components/MenuDrawer';
import HomeScreen from '../HomeScreen';
import Feedback from '../Feedback';
import TaxLaws from '../TaxLaws';
import TaxCalculator from '../TaxCalculator';
import RateUs from '../RateUs';
import SalesTaxLaws from "../TaxLawsScreens/SalesTaxLaws";    
import IncomeTaxLaws from "../TaxLawsScreens/IncomeTaxLaws"; 
import ReturnsDocuments from '../ReturnsChecklist'; 
import ResetPassword from '../ResetPassword';
import CreateProfile from '../CreateProfile';
import ContactUs from '../ContactUs';
import TaxAgent from '../TaxAgent';
import InviteFriend from '../InviteFriend';
import Login from '../Login';
import Logout from '../Logout';
import First from '../First';
import CompleteProfile from '../CompleteProfile';
import RateAgent from '../RateAgent';
import ReviewAgent from '../ReviewAgent';



const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator =  createDrawerNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		Feedback: {
			screen: Feedback
		},
		TaxLaws: {
			screen: TaxLaws
		},
		TaxCalculator: {
			screen: TaxCalculator
		},
		RateUs: {
			screen: RateUs
		},
		SalesTaxLaws: {
			screen: SalesTaxLaws
		},
		IncomeTaxLaws: {
			screen: IncomeTaxLaws
		},
		ReturnsDocuments: {
            screen: ReturnsDocuments
		},
		ResetPassword: {
			screen: ResetPassword
		},
		CreateProfile: {
			screen: CreateProfile
		},
		ContactUs: {
			screen: ContactUs
		},
		TaxAgent: {
			screen: TaxAgent
		},
		InviteFriend: {
			screen: InviteFriend
		},
		Login: {
			screen: Login
		},
		Logout: {
			screen: Logout
		},
		First: {
			screen: First
		},
		CompleteProfile: {
			screen: CompleteProfile
		},
		RateAgent: {
			screen: RateAgent
		},
		ReviewAgent: {
			screen: ReviewAgent
		},
	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);