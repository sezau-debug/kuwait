import React from 'react';
import  { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image , View, StyleSheet, } from 'react-native';
import { ImageBackground } from 'react-native';
import SegmentedButton from './SegmentedButton';
import Header from './screens/Header';

import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import Home from './home';
import Screen4 from './screens/screen4';
import Screen5 from './screens/screen5';
import CustomHeader from './screens/CustomHeader';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [selectedSegment, setSelectedSegment] = useState(0);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']; 

  return (
    <View style={styles.container}>
     <Tab.Navigator
     screenOptions={{
       tabBarShowLabel: false,
       tabBarStyle: {
        display: 'flex',
        backgroundColor: '#F0EFEF',
        borderRadius:80,
        bottom:10,
        height:60,
        width:360,
      },
        
      }}
     
    >
      <Tab.Screen
        name="Events"
        component={Screen1}
        options={{
        
          headerStyle:{
            height:110,
             borderBottomLeftRadius:30,
             borderBottomRightRadius:30,
             backgroundColor:'#F9423A',
             shadowColor:'#000', 
             elevation:25},
             headerTintColor: '#fff',
          tabBarIcon: () => (
            <Image source={require('../images/link_02.png')} style={{ width: 40, height: 40 }}  />
          ),
          
        }}
      />
      <Tab.Screen
        name="Deals"
        component={Screen2}
        options={{
          headerStyle:{
            height:110,
           borderBottomLeftRadius:30,
           borderBottomRightRadius:30,
           backgroundColor:'#F9423A',
           shadowColor:'#000', 
           elevation:25},
          headerTintColor: '#fff',
          tabBarIcon: () => (
            <Image source={require('../images/link_03.png')} style={{ width: 40, height: 40 }}  />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: '#F9423A',  height: 90, 
          borderRadius: 20  },
          headerTintColor: '#fff',
          tabBarIcon: () => (
            <Image source={require('../images/Rename.png')} style={{ width: 40, height: 40 }}  />
          ),
           
        }}
      />
      <Tab.Screen
        name="About"
        component={Screen4}
        options={{
          headerStyle:{
            height:110,
           borderBottomLeftRadius:30,
           borderBottomRightRadius:30,
           backgroundColor:'#F9423A',
           shadowColor:'#000', 
           elevation:25},
           headerTintColor: '#fff',
          tabBarIcon: () => (
            <Image source={require('../images/link_05.png')} style={{ width: 40, height: 40 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Screen5}
        options={{
          header: () => <CustomHeader />, // Use custom header component
          headerTintColor: '#fff',
          tabBarIcon: () => (
            <Image source={require('../images/link_04.png')} style={{ width: 40, height: 40 }}  />
          ),
          
        }}
  
      />
    
     
    </Tab.Navigator>
   
    </View>
   
    
    
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',  
  },
});

 

export default BottomTabNavigator;