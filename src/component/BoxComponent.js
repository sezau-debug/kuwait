import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BoxComponent = ({ logo, heading }) => {
  return (
    <View style={styles.boxContainer}>
      <Image source={ logo  } style={styles.logo} />
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    marginTop:10,
    justifyContent:"center",
    flex: 1,
    alignItems: 'center',
    margin: 9,
    backgroundColor: "red",
    padding:10,
    borderRadius:20,
    width:100,
    height:100,
    top:9,
    borderColor:'white',
    borderWidth:1
  
  },
  logo: {
    width: 50, 
    height: 50, 
    marginBottom: 10,
    marginTop:10,

   
  },
  heading: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight:10,
    color:'white'
  },
});

export default BoxComponent;