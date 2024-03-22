import React, { useState } from 'react';
import axios from 'axios';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput,secureTextEntry , TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Rgst = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleAlreadyUser = () => {
    navigation.navigate('Login');
    console.log('Already have an account? Sign in');
  };
  const handleNext = async () => {
    try {
      setLoading(true);
      const payload = {
        name: 'Sejal',
        email: 'sejal30@gmail.com',
        password: '12345678',
        mobile_no: '8798987654',
        age: 28,
        date_of_birth: '1991-12-16',
        country_id: 85,
        city_id: 112433,
        visitor_intrest: [1, 2, 4, 5],
        device_id: '740f4707 bebcf74f 9b7c25d4 8e335894 5f6aa01d a5ddb387 462c7eaf 61bb78ad',
      };

      const response = await axios.post('https://www.admin.visitkuwait.com.kw/api/visitor-registration', payload);
      setLoading(false);
    } catch (error) {
      
      console.error('Error:', error);

      
      Alert.alert('Registration Failed', 'An error occurred while registering. Please try again.');

      setLoading(false);
    }
  };
    if (!email.trim() || !password.trim()) {

      Alert.alert('Validation Error', 'Please fill in both email and password.');
    } else if (!validateEmail(email)) {
 
      Alert.alert('Validation Error', 'Please enter a valid email address.');
    } else if (!validatePassword(password)) {
  
      Alert.alert('Validation Error', 'Password must be alphanumeric.');
    } else {

      navigation.navigate('Home');
      console.log('Login pressed');
    }
  };
  const validateName = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    return regex.test(password);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/Ellipse 9.png')}
        style={styles.backgroundImage}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <View style={styles.inputContainer}>
          <Text style={styles.headerText}>signing with your preferred options</Text>
          <View style={styles.inputHeaderContainer}>
            <Text style={styles.inputHeader}>Name</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#333"
            value={name}
            onChangeText={text => setName(text)}
          />
          
            <View style={styles.inputHeaderContainer}>
            <Text style={styles.inputHeader}>Email</Text>
          </View>
          <TextInput
          style={styles.input}
          placeholder="seksria@gmail.com"
          placeholderTextColor="#333"
          value={email}
          onChangeText={text => setEmail(text)}
          />
          <View style={styles.inputHeaderContainer}>
            <Text style={styles.inputHeader}>Password</Text>
          </View>
          <TextInput
           style={styles.input}
           placeholder="78965Abc"
           placeholderTextColor="#333"
           secureTextEntry={true}
           value={password}
           onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.loginbutton} onPress={handleNext}>
          <Text style={styles.loginbuttonText}>Next</Text>

        </TouchableOpacity>
       
      </View>
      
        
        
      </ImageBackground>
    
        <TouchableOpacity style={styles.alreadyuser}  onPress={handleAlreadyUser}>
          <Text style={styles.alreadyuserText}>Already have an account? Sign in</Text>
        </TouchableOpacity>
    </View>
  );


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
    bottom: 302,
    
  },
  inputContainer: {
  // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 0,
    width: '76%',
    alignItems: 'center',
    bottom: -120,
    height: '46%',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginRight: 95.9,
    color: 'white',
    marginLeft: -17
  },
  inputHeaderContainer: {
    alignSelf: 'flex-start',
    marginBottom: 0,
    
    
    
  },
  inputHeader: {
    fontSize: 12,
    color: 'white',
    bottom:-3,
    
  },
  input: {
    height: 40,
    width: '110%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    bottom: -3,
    backgroundColor: 'white',
  },
  
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%', // Adjust the width as needed
    position: 'absolute',
    bottom: 55,
    
    
  },

  loginbutton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    width: '120%', 
    borderWidth: 1,
    borderColor: 'black',
    position:'absolute',
    marginLeft:-20,
    bottom:5
    
  },
  loginbuttonText: {
    textAlign: 'center',
    color:'white',
    fontWeight: 'bold',
  },
 
  alreadyuser:{
    bottom:320,
    position:'absolute'
  },

  alreadyuserText:{
    color:'white',
    fontWeight:"500"

  },

});

export default Rgst
;
