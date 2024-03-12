import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Login from '../screen/Login';

const CustomHeader = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Navigate to the login page
    navigation.navigate('Login');
  };

  const handleLike = () => {
    // Navigate to the like page
    navigation.navigate('LikePage');
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.curveBottom} />
      <View style={styles.headerContent}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/user.png')} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>test</Text>
            <Text style={styles.text}>seksria@gmail.com</Text>
          </View>
        </View>
        {/* Like Button */}
        <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
          <Image source={require('../assets/images/tickets.png')} style={styles.likeIcon} />
        </TouchableOpacity>
        {/* Logout Button */}
        <TouchableOpacity onPress={handleLogout}>
          <Image source={require('../assets/images/switchoff.png')} style={styles.switchIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 150,
    backgroundColor: '#F9423A',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  curveBottom: {
    position: 'absolute',
    bottom: -150,
    width: '100%',
    height: 250,
    backgroundColor: '#F9423A',
    borderBottomLeftRadius: 550,
    borderBottomRightRadius: 550,
    transform: [{ scaleX: 1.3 }],
  },
  headerContent: {
    position: 'absolute',
    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Align items horizontally
    paddingHorizontal: 20,
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //alignSelf:'flex-start'
    
  },
  logo: {
    width: 40,
    height: 40,
    top:20,
    marginRight:6

   
  },
  textContainer: {
    flexDirection: 'column',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#FFF',
    marginRight: 60,
    top:20
    
  },
  likeButton: {
    position: 'absolute',
    top: 120, // Adjust top position to center vertically
    left: '50%', // Center horizontally
    transform: [{ translateX: -12.5 }], // Adjust based on the size of the button
  },
  likeIcon: {
    width: 75,
    height: 75,
  },
  switchIcon: {
    width: 25,
    height: 25,
    marginLeft: 20,
    top:20
  },
});

export default CustomHeader;
