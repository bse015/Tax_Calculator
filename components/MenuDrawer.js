import React from 'react';
import {
	View, 
	Text,
	Image,
	ScrollView,
	Platform,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


const WIDTH = Dimensions.get('window').width 
const HEIGHT = Dimensions.get('window').height 

export default class MenuDrawer extends React.Component {
	navLink(nav, text) {
		return(
			<TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
				<Text style={styles.link}>{text}</Text>

			</TouchableOpacity>
		)
	}

	render() {
		return(
			<View style={styles.container}>
				<ScrollView style={styles.scroller}>
					<View style={styles.topLinks}>
						<View style={styles.profile}>
							<View style={styles.imgView}>
								<Image style={styles.img} source = {{uri:'https://smarttax.id/wp-content/uploads/2019/02/Logo-SmartTax-atas.png'}} />
							</View>
						</View>
					</View>
					<View style={styles.bottomLinks}>
						{this.navLink('Home' , 'Home')}
						{this.navLink('TaxLaws', 'Tax Laws')}
						{this.navLink('TaxCalculator', 'Tax Calculator')}
						{this.navLink('ReturnsDocuments', 'Tax Return Documents')}
						{this.navLink('TaxAgent', 'Tax Agents')}
						{this.navLink('ResetPassword', 'Reset Password')}
						{this.navLink('CreateProfile', 'Update Profile (Agents Only)')}
						{this.navLink('Feedback', 'Suggestions & Feedback')}
						{this.navLink('RateUs', 'Rate Us')}
						{this.navLink('ContactUs', 'Contact Us')}
						{this.navLink('InviteFriend', 'Invite a Friend')}
						
					</View>
				</ScrollView>
				<View style={styles.footer}>
					<Text style={styles.description}>Developed By: MUHAMMAD UMER</Text>
					<Text style={styles.version}>v1.0</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	scroller: {
		flex: 1,
	},
	profile: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#777777',
	},
	imgView: {
		flex: 1,
		paddingLeft: 10,
		paddingRight: 30,
	},
	img: {
		height: 150,
		width: 175,
	},
	topLinks:{
		height: 160,
		backgroundColor: 'black',
	},
	bottomLinks: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 10,
		paddingBottom: 70,
	},
	link: {
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		padding: 5,
		paddingLeft: 20,
		margin: 5,
		textAlign: 'left',
	},
	footer: {
		height: hp(10),
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: 'lightgray'
	},
	version: {
		flex: 1, 
		textAlign: 'right',
		marginRight: 20,
		color: 'gray',
		fontSize: 16,
	},
	description: {
		flex: 1, 
		marginLeft: 20,
		fontSize: 16,
		fontWeight: 'bold',
	},
	link1: {
		flex: 1,
		height: 24,
		width: 24,
		padding: 6,
		paddingLeft: 14,
		margin: 5,
	},
})