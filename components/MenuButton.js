import React from 'react'
import { StyleSheet , Text} from 'react-native'
import { Icon } from 'native-base';

export default class MenuButton extends React.Component {
	render() {
		return(
			<Icon
				name="md-menu"
				color="#000000"
				size={75}
				style={styles.menuIcon}
				onPress={() => this.props.navigation.toggleDrawer()}
		/>
		);
	}
}

const styles = StyleSheet.create({
	menuIcon: {
		zIndex: 9,
		position: 'absolute',
		top: -12,
		left: 30,
	}
})