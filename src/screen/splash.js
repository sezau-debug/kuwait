import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image,  } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/Rectangle 142.png')}
        style={styles.backgroundImage}
        imageStyle={{ resizeMode: 'cover' }}
      >
        
        <Image source={require('../images/pattern.png')} style={styles.image2}/>
        <Image source={require('../images/Group 15.png')} style={styles.image1} />
        <Image source={require('../images/patternTitleRight 1.png')} style={styles.image3}/>
        <Image source={require('../images/Mask group.png')} style={styles.image}/> 
        <Image source ={require('../images/patternTitleLeft 1.png')} style={styles.image4}/>
        <Image source={require('../images/Group 16.png')} style={styles.image5}/>
      
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


image1:{
position: 'relative',
width: 67,
height: 67,
marginBottom:50,


},

image:{
  position:"relative",
  marginBottom:10,

},
image2:{
position:"relative",
marginBottom:15,
marginLeft:20,
},
 image3:{
  position:"relative",
  marginLeft:250,
  marginBottom:10,
  

 },

 image4:{
  position:"relative",
  marginRight:280,
  marginBottom:20,
 },

 image5:{
  position:"relative",
  marginBottom:500,
  alignItems:"center",


 }


});


export default Splash;