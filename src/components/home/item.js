import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Container, Content, Button, Icon} from 'native-base';

export default class Item extends Component {
	
	static navigationOptions = ({navigation}) => {
		let {state,goBack} = navigation;
		// 用来判断是否隐藏或显示header
		let header;
		const headerStyle = {backgroundColor:'#4ECBFC'};
		const headerTitle = 'Scence1';
		const headerTitleStyle = {fontSize: 20,color:'white',fontWeight:'500'}
		const headerBackTitle = false;
		const headerLeft = (
			<TouchableOpacity onPress={() => goBack()} style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingLeft: 10}}>
				<View>
					<Icon name="ios-arrow-back" />
				</View>
				<View styale={{paddingLeft: 10}}>
					<Text>go Home!</Text>
				</View>
			</TouchableOpacity>
		);
		const headerRight = (
			<View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingLeft: 10}}>
				<View>
					<Text>右侧 !</Text>
				</View>
			</View>
		);
		return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,headerRight,header}
	};
	
	componentDidMount(){
		this.props.navigation.setParams({
			title:'自定义Header',
			navigatePress: this.navigatePress
		})
	}
	
render() {
	console.log('...........scence1')
	console.log(this.props.navigation)
	const { navigate } = this.props.navigation;
	return (
		<Container style={styles.container}>
			<View>
				<Button small success onPress={() => navigate('Item2', {callback: (data)=>{
					console.log('..........go'); // 打印值为：'回调参数'
				} ,user: 'Lucy' })}>
					<Text> Click Me to scence2! </Text>
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
