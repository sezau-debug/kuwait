import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screen/splash';
import Lng from './src/screen/Lng';
import Intro_01 from './src/screen/intro_01';
import Login from './src/screen/Login';
import Rgst from './src/screen/Rgst'
import MainComponent from './src/component/MainComponent';
import BoxComponent from './src/component/BoxComponent';
import DetailsScreen from './src/component/DetailsScreen';
import Home from './src/component/home';
import Trial from './src/component/Trial';
import BottomTabNavigator from './src/component/BottomTabNavigator';
import Screen1 from './src/component/screens/screen1';
import Screen2 from './src/component/screens/screen2';
import Screen3 from './src/component/screens/screen3';
import Screen4 from './src/component/screens/screen4';
import Screen5 from './src/component/screens/screen5';
import SegmentedButton from './src/component/SegmentedButton';
import DetailScreen from './src/component/screens/DetailScreen';
import fullScreen from './src/component/screens/fullScreen';
import LocationScreen from './src/component/screens/LocationScreen';
import CurrencyScreen from './src/component/screens/CurrencyScreen';
import CultureScreen from './src/component/screens/CultureScreen';
import Header from './src/component/screens/Header';
import Recommended from './src/component/screens/Recommended';
import CustomHeader from './src/component/screens/CustomHeader';
import LikePage from './src/component/screens/LikePage';
const Stack= createStackNavigator();
const App = () => {


  return (
        <NavigationContainer> 
        <Stack.Navigator initialRouteName="Intro_01" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="intro" component={Intro_01}  />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Rgst" component={Rgst} />
        <Stack.Screen name="Lng" component={Lng} />
        <Stack.Screen name="detail" component={DetailScreen} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} 
        options={{ 
        
          headerStyle:{
          height:110,
           borderBottomLeftRadius:30,
           borderBottomRightRadius:30,
           backgroundColor:'#F9423A',
           shadowColor:'#000', 
           elevation:25},
           headerTintColor: '#fff',}}
         />
        <Stack.Screen name="MainComponent" component={MainComponent} /> 
        <Stack.Screen name="Details" component={DetailsScreen}  />
        <Stack.Screen name ="Screen1" component={Screen1} />
        <Stack.Screen name ="Screen2" component={Screen2}/> 
        <Stack.Screen name ="Screen4" component={Screen4} /> 
        {/* <Stack.Screen name ="full" component={fullScreen}/>   */}
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="CurrencyScreen" component={CurrencyScreen} />
        <Stack.Screen name="CultureScreen" component={CultureScreen} />
        <Stack.Screen name="RecommendedEvents" component={Recommended} options={{ 
          headerTitle:() => <Header name ="Recommended"/>,
          headerStyle:{
          height:110,
           borderBottomLeftRadius:30,
           borderBottomRightRadius:30,
           backgroundColor:'#F9423A',
           shadowColor:'#000', 
           elevation:25},
           headerTintColor: '#fff',}}/>
            <Stack.Screen name="CustomHeader" component={CustomHeader} />
            <Stack.Screen name ="LikePage" component={LikePage}/> 
        </Stack.Navigator>
       </NavigationContainer>  
       
        );
  };
    

export default App;

