import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const CurrencyScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>About Details</Text>
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Image */}
        <Image source={require('../assets/images/Group 27.png')} style={styles.image} />

        {/* Subheading */}
        <Text style={styles.subheading}>Currency</Text>
        <Text style={styles.subtitle}>The currency of Kuwait is the Kuwaiti Dinar, abbreviated as KWD. The Kuwaiti Dinar is the highest-valued currency unit in the world, with one dinar divided into 1000 fils.   </Text>
        {/* Paragraph */}
        <Text style={styles.paragraph}>
        The Kuwaiti Dinar (KWD) stands as a symbol of Kuwait's economic strength and stability. Renowned as the highest-valued currency unit globally, the dinar boasts an illustrious history deeply intertwined with Kuwait's economic development. Issued and regulated by the Central Bank of Kuwait, the currency exemplifies meticulous governance and prudent monetary policies.

Characterized by its distinct design, the Kuwaiti Dinar features a range of banknotes and coins, each bearing intricate motifs and symbols reflective of Kuwait's heritage and aspirations. From iconic landmarks to cultural emblems, these representations echo Kuwait's rich history and enduring values.

As a cornerstone of Kuwait's financial landscape.As a cornerstone of Kuwait's financial landscape, the dinar plays a pivotal role in facilitating domestic transactions and international trade. Its robust value and widespread acceptance underscore Kuwait's status as a formidable economic force in the Middle East and beyond.

Beyond its monetary significance, the Kuwaiti Dinar embodies resilience and prosperity, serving as a testament to the nation's unwavering commitment to progress and prosperity. With its esteemed reputation and unwavering stability, the Kuwaiti Dinar stands as a beacon of economic prowess and national pride.


         

                  
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

export default CurrencyScreen;
