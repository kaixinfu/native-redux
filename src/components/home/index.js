import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Container, Content, Button} from 'native-base';
import { StackNavigator } from 'react-navigation';
import Item from './item'

export default class HomeScreen extends Component {
	static navigationOptions = {
		tabBarLabel: 'Home',
		title: 'Home header',
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
			<Container style={styles.container}>
				<View>
					<Button small success onPress={() => navigate('Item', {callback: (data)=>{
						console.log('..........go'); // 打印值为：'回调参数'
					} ,user: 'Lucy' })}>
						<Text> Click Me to scence1! </Text>
					</Button>
				</View>
			</Container>
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
