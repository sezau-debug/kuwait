import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Login = () => {
  
  const navigation = useNavigation(); 

  const handleContinueAsGuest = () => {
    
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/Ellipse 9.png')}
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
          />
          <View style={styles.inputHeaderContainer}>
            <Text style={styles.inputHeader}>Password</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="78965Abc"
            placeholderTextColor="#333"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.loginbutton} onPress={() => console.log('Login pressed')}>
            <Text style={styles.loginbuttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupbutton} onPress={() => console.log('Signup pressed')}>
            <Text style={styles.signupbuttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgotPassword} onPress={() => console.log('Forgot Password pressed')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity style={styles.nextButton} onPress={handleContinueAsGuest}>
        <Text style={styles.nextButtonText}>Continue as a guest</Text>
        {/* onPress={()=> navigation.navigate("Home")} */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.alreadyuser} onPress={() => console.log('Already have an account? Sign in')}>
        <Text style={styles.alreadyuserText}>Already have an account? Sign in</Text>
      </TouchableOpacity>
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
    bottom: 302,
  },
  inputContainer: {
    padding: 20,
    borderRadius: 0,
    width: '76%',
    alignItems: 'center',
    bottom: -120,
    height: '36%',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    marginRight: 95.9,
    color: 'white',
    marginLeft: -20
  },
  inputHeaderContainer: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  inputHeader: {
    fontSize: 12,
    color: 'white',
    bottom: -34,
  },
  input: {
    height: 40,
    width: '110%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    bottom: -30,
    backgroundColor: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    position: 'absolute',
    bottom: 55,
  },
  loginbutton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    width: '50%', 
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 40,
    marginLeft: -30
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
    marginLeft: 27,
  },
  signupbuttonText: {
    textAlign: 'center',
    color: 'blue',
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
    fontSize: 10
  },
  nextButton: {
    position: 'absolute',
    bottom: 146, 
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'blue', 
    width: '50%',
  },
  nextButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  alreadyuser: {
    bottom: 25,
    position: 'absolute'
  },
  alreadyuserText: {
    color: 'gray',
    fontWeight: '500'
  },
});

export default Login;
