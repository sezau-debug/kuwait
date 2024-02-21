import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecommendedPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Recommended Events</Text>
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
   // Change background color as needed
  },
  header: {
    height: 110,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#F9423A',
    shadowColor: '#000',
    elevation: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom:320 
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF', // Change text color as needed
  },
});

export default RecommendedPage;
