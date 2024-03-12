import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinueAsGuest = () => {
    navigation.navigate('Home');
  };

  const handleLogin = () => {
    navigation.navigate('Home');
    console.log('Login pressed');
  };

  const handleSignup = () => {
    navigation.navigate('Rgst');
    // Implement your signup logic here
    console.log('Signup pressed');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password pressed');
  };

  

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/Ellipse 9.png')}
        style={styles.backgroundImage}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <View style={styles.inputContainer}>
          <Text style={styles.headerText}>Signup with your preferred options</Text>
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
          <TouchableOpacity style={styles.loginbutton} onPress={handleLogin}>
            <Text style={styles.loginbuttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupbutton} onPress={handleSignup}>
            <Text style={styles.signupbuttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity style={styles.nextButton} onPress={handleContinueAsGuest}>
        <Text style={styles.nextButtonText}>Continue as a guest</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 20,
    borderRadius: 0,
    width: '85%',
    alignItems: 'center',
    top: 90,
  },
  headerText: {
    fontSize: 19,
    fontWeight: 'bold',
    marginRight: 95.9,
    color: 'white',
  },
  inputHeaderContainer: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  inputHeader: {
    fontSize: 12,
    color: 'white',
    top: 34,
  },
  input: {
    height: 40,
    width: '110%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    top: 30,
    backgroundColor: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    position: 'absolute',
    bottom: 98,
  },
  loginbutton: {
    backgroundColor: '#0D40A2',
    padding: 10,
    borderRadius: 20,
    width: '50%', 
    borderWidth: 1,
    borderColor: 'black',
    marginLeft:-35
  },
  loginbuttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  signupbutton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    width: '50%',
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 75,
  },
  signupbuttonText: {
    textAlign: 'center',
    color: '#0D40A2',
    fontWeight: 'bold',
  },
  forgotPassword: {
    bottom: 27,
    position: 'absolute',
    alignSelf: 'flex-start',
    marginLeft: 50
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 10,
    bottom:30,
  },
  nextButton: {
    position: 'absolute',
    bottom: 146, 
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#0D40A2', 
    width: '50%',
    marginLeft:89
  },
  nextButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  alreadyuser: {
    bottom: 25,
    position: 'absolute',
    marginLeft:70
  },
  alreadyuserText: {
    color: 'gray',
    fontWeight: '500'
  },
});

export default Login;
