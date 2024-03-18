import React from 'react';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet,Modal, TouchableOpacity,FlatList, Alert, Text } from 'react-native';
import Screen1 from '../screen/screen1';
import Screen2 from '../screen/screen2';
import Home from '../screen/home';
import Screen4 from '../screen/screen4';
import Screen5 from '../screen/screen5';
import CustomHeader from '../screen/CustomHeader';
import { Calendar } from 'react-native-calendars'; 
import { Dropdown } from 'react-native-element-dropdown';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
const [selectedTab, setSelectedTab] = useState('Events');
const [modalVisible, setModalVisible] = useState(false);
const [eventType, setEventType] = useState('');
const [selectedEventType, setSelectedEventType] = useState(null);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  }
  const handleEventTypeChange = (value) => {
    setEventType(value);
  };
  return(
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
         <View style={styles.modalView}>
          <Text style={styles.modalHeading}>Filter</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownLabel}>Select Event Type</Text>
            <Dropdown
              data={[
                { label: 'Type 1', value: 'type1' },
                { label: 'Type 2', value: 'type2' },
                { label: 'Type 3', value: 'type3' },
              ]}
              onSelect={handleEventTypeChange}
            />
          </View>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownLabel}>Select Event Schedule</Text>
            <Dropdown
              data={[
                { label: 'Schedule 1', value: 'schedule1' },
                { label: 'Schedule 2', value: 'schedule2' },
                { label: 'Schedule 3', value: 'schedule3' },
              ]}
            />
          </View>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownLabel}>Select Tickets</Text>
            <Dropdown
              data={[
                { label: 'Ticket 1', value: 'ticket1' },
                { label: 'Ticket 2', value: 'ticket2' },
                { label: 'Ticket 3', value: 'ticket3' },
              ]}
            />
          </View>
          <TouchableOpacity onPress={closeModal} style={{ marginTop: 20 }}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>  
      <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
            display: 'flex',
            backgroundColor: '#F0EFEF',
            borderRadius: 80,
            bottom: 10,
            height: 60,
            width: 360,
          },
        }}>
        <Tab.Screen
          name="Events"
          component={Screen1}
          options={{
             headerStyle:{
             height:100,
             borderBottomLeftRadius:30,
             borderBottomRightRadius:30,
             backgroundColor:'#F9423A',
             shadowColor:'#000', 
             elevation:25},
             headerTintColor: '#fff',
             headerTitleStyle: {
             fontWeight: 'bold', 
             fontSize:24
            },
            headerRight: () => (
              <TouchableOpacity onPress={openModal} style={{ marginRight: 20, bottom:6 }}>
                <Image
                  source={require('../assets/images/filter.png')}
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
            ),
            headerTitleContainerStyle: {
              alignSelf: 'flex-start',
              marginTop: 5
            },
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: focused ? '#0D40A2' : 'transparent',
                  borderRadius: 20,
                  padding: 8,
                }}>
                <Image
                  source={require('../assets/images/link_02 (1).png')}
                  style={{ width: 40, height: 40 }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Deals"
          component={Screen2}
          options={{
             headerStyle:{
             height:100,
             borderBottomLeftRadius:30,
             borderBottomRightRadius:30,
             backgroundColor:'#F9423-A',
             shadowColor:'#000', 
             elevation:25},
             headerTintColor: '#fff',
             headerTitleStyle: {
             fontWeight: 'bold', 
             fontSize:24
            },
            headerRight: () => (
              <TouchableOpacity onPress={openModal} style={{ marginRight: 20, bottom:6 }}>
                <Image
                  source={require('../assets/images/filter.png')}
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
            ),
            headerTitleContainerStyle: {
              alignSelf: 'flex-start',
              marginTop: 5
            },
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: focused ? '#0D40A2' : 'transparent',
                  borderRadius: 20,
                  padding: 8,
                }}>
                <Image
                  source={require('../assets/images/link_03.png')}
                  style={{ width: 40, height: 40 }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
           name="Home"
           component={Home}
           listeners={({ navigation }) => ({
             tabPress: (event) => {
               event.preventDefault();
               navigation.replace('Home');
             },
           })}
           options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                backgroundColor: focused ? '#0D40A2' : 'transparent',
                borderRadius: 20,
                padding: 8, }}>
                <Image
                  source={require('../assets/images/link_03 (1).png')}
                  style={{ width: 40, height: 40, }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={Screen4}
          options={{
             headerStyle:{
             height:110,
             borderBottomLeftRadius:30,
             borderBottomRightRadius:30,
             backgroundColor:'#F9423A',
             shadowColor:'#000', 
             elevation:25},
             headerTintColor: '#fff',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: focused ? '#0D40A2' : 'transparent',
                  borderRadius: 20,
                  padding: 8,
                }}>
                <Image
                  source={require('../assets/images/link_05.png')}
                  style={{ width: 40, height: 40 }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Screen5}
          options={{
            header: () => <CustomHeader />, 
            headerTintColor: '#fff',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: focused ? '#0D40A2' : 'transparent',
                  borderRadius: 20,
                  padding: 8,
                }}>
                <Image
                  source={require('../assets/images/link_04.png')}
                  style={{ width: 40, height: 40 }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
modalView: {
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
  width: 0,
  height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,

},
modalHeading: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
},
dropdownContainer: {
  marginBottom: 20,
     width: '100%',
    borderWidth: 1,
    borderColor: '#ccc', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10,
},
dropdownLabel: {
  marginBottom: 10,
},
closeButton: {
  marginTop: 20,
},
});


export default BottomTabNavigator;
