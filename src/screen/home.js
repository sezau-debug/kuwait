import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomTabNavigator from '../component/BottomTabNavigator';
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen5 from './screen4';
const ButtonPage = () => {
  const navigation = useNavigation();
  const data = [
    { id: '1', label: 'Events',screen: 'Events',  leftImage: require('../assets/images/Mask group (1).png'), rightImage: require('../assets/images/back.png') },
    { id: '2', label: 'Deals and Offer', screen: 'Deals', leftImage: require('../assets/images/Mask group (3).png'), rightImage: require('../assets/images/back.png') },
    { id: '3', label: 'About Kuwait', screen: 'About', leftImage: require('../assets/images/Mask group (2).png'), rightImage: require('../assets/images/back.png') },
  ];

  const handleButtonPress = (buttonId) => {
    console.log(`Button ${buttonId} pressed`);
    const selectedItem = data.find(item => item.id === buttonId);
    if (selectedItem && selectedItem.screen) {
      navigation.navigate('BottomTabNavigator', { screen: selectedItem.screen });
    }
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleButtonPress(item.id)}
    >
      <View style=
      {styles.wrapper}>
        <View style={styles.leftImageContainer}>
      <Image source={item.leftImage} style={styles.buttonLeftImage} />
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.buttonText}>{item.label}</Text>
      </View>
      <View style={styles.rightImageContainer}>
      <Image source={item.rightImage} style={styles.buttonRightImage} />
      </View>
      </View>
    </TouchableOpacity>
  );
  return (
    
    <View style={styles.container}>
      <Image
        source={require('../assets/images/mainLogo.png')}
        style={styles.headerImage}
      />
      <Image
        source={require('../assets/images/Group 44.png')}
        style={styles.headerImage1}
      />
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={1}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9423A',
    
  },
  headerImage:{
    top:150, 
  },
  headerImage1:{
    top:180
  },
  button: {
    backgroundColor: '#0D40A2' ,
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width:300,
    height:75,
    borderRadius:10
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  textContainer: {
    position: 'absolute',
    left:59,
    top:10
    
  },
  wrapper: {
    display:'flex',
    flexDirection:"row",
   // alignItems:"center",
    gap:5,
    // position:'absolute',
  justifyContent:"space-evenly"

   },
   leftImageContainer: {
    position: 'absolute',
    left: -15,
  },
  buttonLeftImage: {
  
  borderRadius:10,
    flexDirection: 'row',
   // display:"flex",
   // alignContent:"stretch",
    //alignItems:'flex-start',
   // alignSelf:'flex-start',
    //justifyContent:'flex-start',
    bottom:15,

  
  },
  rightImageContainer: {
    position: 'absolute',
    right: -14,
    top:5
  },
  buttonRightImage: {
  
    width: 30, 
    height: 30, 
    marginHorizontal: 10, 
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  flatListContainer: {
    justifyContent: 'center',
  //  alignItems: 'center',
    top:220
  },
});


export default ButtonPage;
