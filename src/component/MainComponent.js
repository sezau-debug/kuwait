import React from 'react';
import { useState } from 'react'
import { View, FlatList, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import DetailsScreen from './DetailsScreen';
import BoxComponent from './BoxComponent'; // Import BoxComponent from its file

const data = [
    { id: '1', logo: require('../assets/images/roller-coaster-svgrepo-com 1.png'), heading: 'Experiences' },
    { id: '2', logo: require('../assets/images/icon.png'), heading: 'Game' },
    { id: '4', logo: require('../assets/images/swimming-svgrepo-com 1.png'), heading: 'Water Games' },
    { id: '5', logo: require('../assets/images/theater-masks-svgrepo-com 1.png'), heading: 'Theatre' },
    { id: '6', logo: require('../assets/images/restaurant-outline-svgrepo-com 1.png'), heading: 'Restaurant' },
    { id: '7', logo: require('../assets/images/kids-couple-svgrepo-com 1.png'), heading: 'Kids' },
    { id: '8', logo: require('../assets/images/family-4-people-svgrepo-com 1.png'), heading: 'Families' },
    { id: '9', logo: require('../assets/images/paris-louvre-svgrepo-com 1.png'), heading: 'Exhibition' },
    { id: '10', logo: require('../assets/images/shopping-bag-svgrepo-com 1.png'), heading: 'Shopping' },
    { id: '11', logo: require('../assets/images/microphone-svgrepo-com 1.png'), heading: 'Concert' },
    { id: '12', logo: require('../assets/images/cafe-svgrepo-com 1.png'), heading: 'Cafe' },
    { id: '13', logo: require('../assets/images/art-gallery-svgrepo-com 1.png'), heading: 'Art' },
];

const MainComponent = () => {
  const [selectedLogoId, setSelectedLogoId] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedLogoId(item.id === selectedLogoId ? null : item.id)}>
       <BoxComponent logo={item.logo} heading={item.heading} /> 
    </TouchableOpacity>
  );

  const handleSelectAll = () => {
    console.log('Select All pressed');
  };

  const handleContinue = () => {
    console.log('Continue pressed');
  };
    
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      
      <Text style={styles.headerText}>Select Your Option</Text> 
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <Image
        source={require('../assets/images/redBtm.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSelectAll}>
          <View style={styles.buttonContent}>
            <Image source={require('../assets/images/Ellipse 24.png')} style={styles.logo} />
            <Text style={styles.buttonText}>Select All</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText1}>Continue</Text>
            <Image source={require('../assets/images/Vector (2).png')} style={styles.logo} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'left',
    top:15,
    marginVertical: 15,
    color: 'white', 
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#fff',
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#0D40A2',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  buttonText1: {
    color: '#0D40A2',
    fontWeight: 'bold',
    marginRight: 20,
  },
  logo: {
    width: 15,
    height: 14,
    marginLeft: 2,
  },
});

export default MainComponent;