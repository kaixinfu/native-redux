import { StackNavigator } from "react-navigation";
import APP from './app'
import Item from './home/item'
import Item2 from './home/item2'

export default Route = StackNavigator({
	MainScreen: { screen: APP },
	Item: { screen: Item },
	Item2: { screen: Item2 },
}, {

});
