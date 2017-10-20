import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Mine extends Component {
	static navigationOptions = {
		tabBarLabel: 'Mine',
		title: 'Mine header',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../../dist/img/mine.png')}
				style={[styles.icon, {tintColor: tintColor}]}
			/>
		)
	};
	render() {
		return (
			<View style={styles.container}>
				<Text> Mine! </Text>
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
