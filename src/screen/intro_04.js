import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const ImageContainer = ({ imageSource }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image3} />
      </View>
    );
  };
const Intro_04 = () => {
  return (
    
    <View style={styles.container}>
         
      
      <Image
        source={require('../assets/images/Group 58.png')}
        style={styles.image1}
        imageStyle={{ resizeMode: 'cover' }}
      />
    
      <Text style={styles.welcomeText}>What are your preferred events?</Text>
      <Text style={styles.additionalText}>
      Filter events based on your interests
      </Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.skipbutton} onPress={() => console.log('Skip pressed')}>
          <Text style={styles.skipbuttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextbutton} onPress={() => console.log('Next pressed')}>
          <Text style={styles.nextbuttonText}>Next</Text>
        </TouchableOpacity>
        
      </View>

    
    <View style={styles.imageRowContainer}>
      <ImageContainer imageSource={require('../assets/images/Ellipse 19.png')} />
      <ImageContainer imageSource={require('../assets/images/Ellipse 20.png')} />
      <ImageContainer imageSource={require('../assets/images/Ellipse 21.png')} />
      <ImageContainer imageSource={require('../assets/images/Ellipse 22.png')} />
      </View>
      
      <Image
        source={require('../assets/images/4 1.png')}
        style={styles.image}
        imageStyle={{ resizeMode: 'cover' }}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  

  image1: {
    position: 'absolute',
    bottom: 713,
    height: 29,
    width: 359,
  },

  image: {
    position: 'absolute',
    bottom: 0,
    height: 500,
  
  },
  imageContainer: {
    marginTop: -4,
    marginHorizontal:6
    
  },

  image3: {
   bottom:210,
    
  },
  imageRowContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  welcomeText: {
    position: 'absolute',
    textAlign: 'center',
    color: 'black',
    bottom: 640,
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'ABC Favorit Arabic',
    marginBottom: 0,
    padding: 1
  },
  additionalText: {
    bottom: 240,
    fontFamily: 'ABC Favorit Arabic',
    fontSize: 14,
    color: 'gray',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%', 
    position: 'absolute',
    bottom: 510,
    
  },

  skipbutton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    width: '50%', 
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 30,
    marginLeft:-20
    
  },
  skipbuttonText: {
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
  },
  nextbutton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    width: '50%',
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 20,
    
  },
  nextbuttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Intro_04;
