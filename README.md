# native-redux

## Contains

- [x] [脚手架create-react-native-app](https://www.npmjs.com/package/create-react-native-app)
- [x] [react-native](http://reactnative.cn/)
- [x] [react-navigation](https://reactnavigation.org/)
- [x] [Redux](https://github.com/reactjs/redux)
- [x] [Babel](https://babeljs.io/)
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux)

## Install

`git clone git@github.com:liukaixin01/native-redux.git`

`npm install`
## 脚手架使用介绍
提示
> Node v6+

    $ npm install -g create-react-native-app
    $ create-react-native-app app
    $ cd app
    $ npm start
优点
> 不用再去配置烦人的 iOS、Android 编译环境
> 可以用 Windows 开发 iOS 版的 RN 应用。
安装好之后就不再使用 react-native init app 的命令来新建应用了，使用 create-react-native-app 创建的项目，你在文件夹里看不到 iOS 和 Android 工程目录，它只包含了 JS 部分的代码。

## react-navigation
关于goBack返回指定页面提示
> react-navigation是提供了goBack()到指定页面的方法的，那就是在goBack()中添加一个参数，但当你使用goBack(key)的时候，并没有跳转，原因是react-navigation默认goBack()中的参数是系统随机分配的key，而不是手动设置的routeName，而方法内部又没有提供可以获得key的方法，所以这里只能通过修改源码将key换成routeName了。

    把项目/node_modules/react-navigation/src/routers/StackRouter.js文件里的
    const backRoute = state.routes.find((route: *) => route.key === action.key);
    改成 const backRoute = state.routes.find(route => route.routeName === action.key);

    这里的component要填想返回的组件的前一个组件的routeName, 比如你的栈里顺序是home1, home2, home3, home4, 在home4里要返回home2, 使用this.props.navigation.goBack('home3');; 并且又会带出一个问题: goBack()方法没反应了, 必须加个null进去, 写成goBack(null)...
> 后期会集成redux解决这个问题
## Dev

> ios：`npm run ios`
> android `npm run android`
> npm start 启动该应用后，会生成一个二维码,使用 Expo 扫描这个二维码就可以打开你编写的 RN 应用了
