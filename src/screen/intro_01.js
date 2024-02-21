import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const Intro_01 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Onboarding
        onSkip={() => console.log('Skip pressed')}
        onDone={() => console.log('Done pressed')}
        pages={[
          {
            backgroundColor: '#fff',
            title: 'Welcome',
            subtitle: 'Welcome to the official Kuwait Events Calendar',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
            containerStyles: styles.pageContainer,
            image: <Image source={require('../images/3 1.png')} style={styles.image} />,
          },
          {
            backgroundColor: '#fff',
            title: 'Second Page',
            subtitle: 'Description of the second page',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
            containerStyles: styles.pageContainer,
            image: <Image source={require('../images/6 1.png')} style={styles.image} />,
          },
          {
            backgroundColor: '#fff',
            title: 'Third Page',
            subtitle: 'Description of the third page',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
            containerStyles: styles.pageContainer,
            image: <Image source={require('../images/5 1.png')} style={styles.image} />,
          },
          {
            backgroundColor: '#fff',
            title: 'Fourth Page',
            subtitle: 'Description of the fourth page',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
            containerStyles: styles.pageContainer,
            image: <Image source={require('../images/4 1.png')} style={styles.image} />,
          },
        ]}
        skipLabel={<Text style={styles.skipbuttonText}>Skip</Text>}
        nextLabel={<Text style={styles.nextbuttonText}>Next</Text>}
        showSkip={true}
        showNext={true}
        showDone={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  

  },
  skipbuttonText: {
    color: 'blue',
    fontWeight: 'bold',

    
  },
  nextbuttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#444',
    fontSize: 18,
  },
  pageContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40,
  },
});

export default Intro_01;
