import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const OnboardingScreen = () => {
  const slides = [
    {
      id: '1',
      title: 'Welcome',
      subtitle: 'to the official Kuwait Events Calendar',
      image: require('../assets/images/3 1.png'),
    },
    {
      id: '2',
      title: 'Accurate Event Location',
      subtitle: 'Plan your event & we will guide you',
      image: require('../assets/images/6 1.png'),
    },
    {
      id: '3',
      title: 'We made it easier for you',
      subtitle: 'Our application has tickets for all events',
      image: require('../assets/images/5 1.png'),
    },
    {
      id: '4',
      title: 'What are your preferred events?',
      subtitle: 'Filter events based on your interests',
      image: require('../assets/images/4 1.png'),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation(); // Get navigation object using useNavigation hook

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Navigate to the next screen (e.g., Home screen)
      navigation.navigate('HomeScreen');
    }
  };

  const handleSkip = () => {
    // Navigate to the next screen (e.g., Home screen)
    navigation.navigate('HomeScreen');
  };

  const handleLogin = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    // Navigate to the signup screen
    navigation.navigate('Rgst');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{slides[currentIndex].title}</Text>
        <Text style={styles.subtitle}>{slides[currentIndex].subtitle}</Text>

        {/* Indicators */}
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && styles.activeIndicator,
              ]}
            />
          ))}
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1} onPress={currentIndex === slides.length - 1 ? handleLogin : handleSkip}>
            <Text style={styles.buttonText1}>{currentIndex === slides.length - 1 ? 'Login' : 'Skip'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={currentIndex === slides.length - 1 ? handleSignup : handleNext}>
            <Text style={styles.buttonText2}>
              {currentIndex === slides.length - 1 ? 'Signup' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Image */}
        <Image source={slides[currentIndex].image} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingTop: 50, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
    color: '#666666',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  indicator: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#0D40A2',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button1: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    width: '30%',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText1: {
    textAlign: 'center',
    color: '#0D40A2',
    fontWeight: 'bold',
  },
  button2: {
    backgroundColor: '#0D40A2',
    padding: 10,
    borderRadius: 20,
    width: '30%',
    borderWidth: 1,
    borderColor: 'blue',
    marginLeft:80
  },
  buttonText2: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    marginTop: 10,
  },
});

export default OnboardingScreen;
