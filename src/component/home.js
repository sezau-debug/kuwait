import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const ButtonPage = () => {
  const data = [
    { id: '1', label: 'Events', leftImage: require('../images/Mask group (1).png'), rightImage: require('../images/back.png') },
    { id: '2', label: 'Deals and Offers', leftImage: require('../images/Mask group (3).png'), rightImage: require('../images/back.png') },
    { id: '3', label: 'About Kuwait', leftImage: require('../images/Mask group (2).png'), rightImage: require('../images/back.png') },
  ];

  const handleButtonPress = (buttonId) => {
    console.log(`Button ${buttonId} pressed`);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleButtonPress(item.id)}
    >
      <View style=
      {styles.wrapper}>
      <Image source={item.leftImage} style={styles.buttonLeftImage} />
      <Text style={styles.buttonText}>{item.label}</Text>
      <Image source={item.rightImage} style={styles.buttonRightImage} />

      </View>
    </TouchableOpacity>
  );

  return (
    
    <View style={styles.container}>
      <Image
        source={require('../images/mainLogo.png')}
        style={styles.headerImage}
      />
      <Image
        source={require('../images/Group 44.png')}
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
    width:280

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  wrapper: {
    display:'flex',
    flexDirection:"row",
    alignItems:"center",
    gap:5,
    justifyContent:"space-evenly"

   },
  buttonLeftImage: {
  
    width: 75, 
    height: 55, 
    // marginHorizontal: 10, 
    flexDirection: 'row',
    display:"flex",
    alignContent:"stretch"
    // alignItems: 'ceter',
  },
  buttonRightImage: {
  
    width: 35, 
    height: 35, 
    marginHorizontal: 10, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top:250
  },
});


export default ButtonPage;
