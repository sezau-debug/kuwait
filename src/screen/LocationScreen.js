import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>About Details</Text>
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Image */}
        <Image source={require('../assets/images/icon (1).png')} style={styles.image} />

        {/* Subheading */}
        <Text style={styles.subheading}>Location</Text>
        <Text style={styles.subtitle}>Located at the crossroads where East meets West, Kuwait embodies a captivating blend of tradition </Text>


        {/* Paragraph */}
        <Text style={styles.paragraph}>
          Kuwait is a small country located in the northeastern corner of the Arabian Peninsula in Western Asia. It is bordered by Iraq to the north and west, and Saudi Arabia to the south. Kuwait is situated at the head of the Persian Gulf, with its coastline stretching along the Gulf's northwestern shore. The capital city, Kuwait City, is a bustling metropolis located on the country's eastern coast. Despite its small size, Kuwait holds strategic importance due to its vast oil reserves, making it one of the wealthiest nations in the world per capita. The country's landscape is predominantly desert, characterized by flat, sandy plains and occasional low hills. Kuwait experiences a desert climate with scorching hot summers and mild winters, with very little rainfall throughout the year. Kuwait is a sovereign country located in the northeastern corner of the Arabian Peninsula in Western Asia. It is bordered by Iraq to the north and northwest, and Saudi Arabia to the south and southwest. To the east, Kuwait is bordered by the Persian Gulf, which provides the country with access to maritime trade routes.

          The geographical coordinates of Kuwait are approximately 29.3759° N latitude and 47.9774° E longitude.

          Kuwait City, the capital and largest city of Kuwait, is situated on the country's eastern coast, along the shores of the Persian Gulf. Other major cities in Kuwait include Hawalli, Ahmadi, and Farwaniya.

         

          

          
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 90,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#F9423A',
    shadowColor: '#000',
    elevation: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    top: 1,
    marginRight: 80,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, // Adjust as needed
    paddingBottom: 20, // Adjust as needed
  },
  image: {
    alignSelf: 'flex-start',
    marginLeft: 20,// Adjust as needed
    resizeMode: 'cover',
    marginBottom: 20, // Adjust as needed
  },
  subtitle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 15,
    bottom: 2,
    color:'#666666'
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 15,
    bottom: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    color: '#666666',
// Adjust as needed
  },
});

export default LocationScreen;
