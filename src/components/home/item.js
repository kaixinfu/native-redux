import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Item extends Component {
	static navigationOptions = {
		tabBarLabel: 'Item',
		title: 'Item header',
		tabBarIcon: ({ tintColor }) => (
		<Image
			source={require('../../dist/img/home.png')}
			style={[styles.icon, {tintColor: tintColor}]}
		/>
	)
};
render() {
	const { navigate } = this.props.navigation;
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigate('Chat', { user: 'Lucy' })}>
				<Text>item</Text>
			</TouchableOpacity>
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
