import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DetailScreen from './DetailScreen';
import Header from './Header';
const choices = ['Music', 'Game', 'Expo', 'Health', 'Dance', 'Party', 'Tech', 'Swim'];

const DATA1 = [
  { id: '1', image: require('./Images/event1.jpg'), heading: 'live concert' },
  { id: '2', image: require('./Images/event2.jpg'), heading: 'red quick race' },
  { id: '3', image: require('./Images/event3.jpg'), heading: 'singer artist' },
  { id: '4', image: require('./Images/EVENT4.jpg'), heading: 'adventure' },
];

const Screen1 = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const navigation = useNavigation(); 

  const toggleItemSelection = (item) => {
    if (selectedButtons.includes(item)) {
      setSelectedButtons(prevSelectedButtons => prevSelectedButtons.filter(button => button !== item));
    } else {
      setSelectedButtons(prevSelectedButtons => [...prevSelectedButtons, item]);
    }
  };

  const toggleImageSelection = (item) => {
    setSelectedItem(item);
    navigation.navigate('detail' , { heading: item.heading } ); 
  };

  const isButtonSelected = (item) => {
    return selectedButtons.includes(item);
  };

  const isImageSelected = (item) => {
    return selectedItem === item;
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.buttonContainer}>
          {choices.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.selectionButton, isButtonSelected(item) && styles.selectedButton]}
              onPress={() => toggleItemSelection(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Text style={styles.heading}>Today's Events</Text> 
      <ScrollView nestedScrollEnabled={true}>
         
        <FlatList
          data={DATA1}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => toggleImageSelection(item.heading)}
              style={[
                styles.item,
                isImageSelected(item.heading) && { borderColor: 'blue' },
              ]}
            >
              <Image source={item.image} style={styles.image} />
              <Text>{item.heading}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginBottom:20,
  },
  item: {
    alignItems: 'center',
    marginVertical: 5,
    width: '50%',
    marginHorizontal: 3,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 6,
    overflow: 'hidden', 
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 5,
    borderRadius: 9,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  selectionButton: {
    padding: 5,
    borderColor: 'grey',
    borderWidth: 2,
    marginHorizontal: 5,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 80,
    borderWidth:1
  },
  selectedButton: {
    borderColor: 'blue',
  },
  flatListContent: {
    alignItems: 'center',
    paddingTop:1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'flex-end',
    marginTop: 0,
    marginBottom: 20,
  },
});

export default Screen1;
