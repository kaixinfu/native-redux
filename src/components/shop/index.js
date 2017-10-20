import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Shop extends Component {
	static navigationOptions = {
		tabBarLabel: 'Shop',
		title: 'Shop header',
		tabBarIcon: ({ tintColor }) => (
		<Image
			source={require('../../dist/img/shop.png')}
			style={[styles.icon, {tintColor: tintColor}]}
		/>)
	};
	render() {
		return (
			<View style={styles.container}>
				<Text> Shop! </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		width: 26,
		height: 26,
	},
});
