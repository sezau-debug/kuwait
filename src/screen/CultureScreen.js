import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const CultureScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>About Details</Text>
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Image */}
        <Image source={require('../assets/images/Group 13.png')} style={styles.image} />

        {/* Subheading */}
        <Text style={styles.subheading}>Culture</Text>
        <Text style={styles.subtitle}>The traditional attire reflects the modes and cultural The traditional attire reflects the modesty and cultural heritage of Kuwait.only serve as  cultural identity also as expressions of faith and respect for tradition.

</Text>


        {/* Paragraph */}
        <Text style={styles.paragraph}>
        Kuwait's culture is deeply rooted in Islamic traditions, which serve as the foundation of its societal norms and values. Respect for elders, hospitality, and strong family bonds are central tenets of Kuwaiti culture, fostering a sense of community and belonging. Traditional attire, such as the thobe for men and the abaya for women, reflects the country's cultural heritage and religious beliefs, serving as symbols of modesty and identity.

Cuisine plays a significant role in Kuwaiti culture, blending flavors from various culinary traditions to create a unique and flavorful cuisine. Rice, meat, and fish are staples of Kuwaiti dishes, often seasoned with aromatic spices like saffron and cardamom. Sharing meals with family and friends is a cherished tradition, embodying the spirit of hospitality and generosity that defines Kuwaiti culture.







          

          
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
    marginBottom: 10,
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
    marginLeft: 16,// Adjust as needed
    resizeMode: 'cover',
    marginBottom: 28, // Adjust as needed
  },
  subtitle:{
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'flex-start',
    marginLeft: 15,
    
    color:'#666666',
    
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
    alignSelf: 'flex-start',
    marginLeft: 15,

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

export default CultureScreen;
