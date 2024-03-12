import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const Lng = () => {
  const [englishText, setEnglishText] = useState('');
  const [urduText, setUrduText] = useState('');
  const [nextButtonLabel, setNextButtonLabel] = useState('Next');

  const handleEnglishInputChange = (text) => {
    setEnglishText(text);
  };

  const handleUrduInputChange = (text) => {
    setUrduText(text);
  };

  const handleEnglishButtonClick = () => {
    
    console.log('English Button Clicked:', englishText);
    setNextButtonLabel('Next');
  };

  const handleUrduButtonClick = () => {
    
    console.log('Urdu Button Clicked:', urduText);
    setNextButtonLabel('بعد کا');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/Rectangle 142.png')}
        style={styles.backgroundImage}
        imageStyle={{ resizeMode: 'cover' }}
      >
         <Image source={require('../assets/images/pattern.png')} style={styles.image}/>
         
         <Image source={require('../assets/images/redBtm.png')} style={styles.image1}/>
         <Image source={require('../assets/images/Mask group.png')} style={styles.image2}/>
         
        
        <TouchableOpacity style={[styles.button, styles.englishButton]} onPress={handleEnglishButtonClick}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.urduButton]} onPress={handleUrduButtonClick}>
          <Text style={[styles.buttonText, styles.urduButtonText]}>اردو</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>{nextButtonLabel}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%', 
    height: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: 360,
    height: 272,
    left: 0,
    top: -1,
  },
  image1: {
    position: 'absolute',
    width:  370,
    height: 110,
    bottom: 0,
    borderRadius:20,
  },
  image2: {
    position: 'absolute',
    width: 220,
    height: 47,
    bottom: 200,
  },
  button: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 20,
    marginHorizontal: 10, 
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  },
  englishButton: {
    backgroundColor: '#0D40A2',
    width: '50%',
  },
  urduButton: {
    backgroundColor: 'white',
    width: '50%',
  },
  urduButtonText: {
    fontFamily: 'UrduFont',
    color: '#0D40A2',
  },
  nextButton: {
    position: 'absolute',
    bottom: 26, 
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white', 
    width: '50%',
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D40A2',
    textAlign:'center'
  },
});

export default Lng;
