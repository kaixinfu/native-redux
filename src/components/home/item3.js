import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Container, Content, Button, Icon} from 'native-base';
import { NavigationActions } from 'react-navigation'

const goToHomeAction = NavigationActions.reset({
		index: 0,
		actions: [
			NavigationActions.navigate({ routeName: 'MainScreen' })
		]
	})

export default class Item3 extends Component {
	
	static navigationOptions = ({navigation}) => {
		let {state,goBack} = navigation;
		
		// 用来判断是否隐藏或显示header
		const visible= state.params.isVisible;
		let header;
		if (visible === true){
			header = null;
		}
		const headerStyle = {backgroundColor:'#4ECBFC'};
		const headerTitle = 'Scence3';
		const headerTitleStyle = {fontSize: 20,color:'white',fontWeight:'500'}
		const headerBackTitle = false;
		const headerLeft = (
			<TouchableOpacity onPress={() => goBack()} style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingLeft: 10}}>
				<View>
					<Icon name="ios-arrow-back" />
				</View>
				<View styale={{paddingLeft: 10}}>
					<Text>go Scence2!</Text>
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
	
	handleReset = _ => {
		const { navigate , goBack, dispatch} = this.props.navigation;
		return dispatch(goToHomeAction)
	}
	handleGoBack = _ => {
		const { navigate , goBack, dispatch} = this.props.navigation;
		function goback () {
			goBack()
			goBack()
		}
		return goback()
	}
	
render() {
	console.log('...........scence3')
	const { navigate , goBack, dispatch} = this.props.navigation;
	// dispatch(NavigationActions.navigate({ routeName: 'Item'})) 可以跳转到scence1，但还是会压栈
	// dispatch(NavigationActions.reset({
	// 	index: 0,
	// 	actions: [
	// 		NavigationActions.navigate({ routeName: 'Item' })
	// 	]}) 可以跳转到scence1，清空堆栈
	return (
		<Container style={styles.container}>
			<View>
				<Button small success onPress={() => this.handleReset() }>
					<Text> Click Me to Home! </Text>
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
