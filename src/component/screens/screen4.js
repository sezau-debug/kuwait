import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LocationScreen from './LocationScreen';
import CurrencyScreen from './CurrencyScreen';
import CultureScreen from './CultureScreen';

const Stack = createStackNavigator();

const screen4 = ({ navigation }) => {
  // Data for FlatList
  const data = [
    { id: '1' , image: require('./Images/icon (1).png'), title: 'Location', description: 'Discover various locations around the world.', screen: 'LocationScreen' },
    { id: '2', image: require('./Images/Group 13.png'), title: 'Currency', description: 'Learn about different currencies and exchange rates.', screen: 'CurrencyScreen' },
    { id: '3', image: require('./Images/Group 27.png') , title: 'Culture', description: 'Explore diverse cultures and traditions,  here different diversity exists.', screen: 'CultureScreen' },
  ];

  // Render item for FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(item.screen)}>
      <View style={styles.wrapper}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.paragraphText}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    top:20,
  },
  box: {
    width: 340,
    height: 140,
    backgroundColor: 'transparent',
    margin: 5,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderColor:'grey',
    borderWidth:0.4,
    borderRadius:5,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  image: {
    marginHorizontal: 20, 
   justifyContent:'center',
     alignItems:'center',
     alignSelf:'center',
     display:'flex'
  },
  textContainer: {
    flex: 1,
    marginHorizontal:2
  },
  titleText: {
    fontSize: 18,
  },
  paragraphText: {
    fontSize: 16,
    marginTop: 5,
  }
});

export default screen4;