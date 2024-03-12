import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Screen5 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.header}>Choose Language</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => { /* Handle first button press */ }}>
            <Image source={require('../assets/images/user (3).png')} style={styles.button} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle second button press */ }}>
            <Image source={require('../assets/images/user (3).png')} style={styles.button} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', 
  },
  box: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#DDD', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#DDD', // Set header background to gray
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 20,
    height: 20,
  },
});

export default Screen5;
