import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';


const fullScreen = ({ route }) => {
  
  const { heading } = route.params;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const openModal = (imageUri) => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleRecommended = () => {
    
    console.log('Recomended events');
  };

  const handleBook = () => {
    console.log('book now');
  };

  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut turpis vel turpis laoreet vehicula. Integer rhoncus vulputate justo sit amet feugiat. Phasellus rhoncus pretium lorem, eget auctor sapien tristique in. Sed gravida augue ac eros tristique, a gravida purus consequat. Vivamus luctus ex id erat volutpat, eget consectetur nulla sagittis. Sed at lorem ac sapien placerat tincidunt. Sed condimentum, nulla ac suscipit mollis, ex nisi venenatis leo, at ullamcorper risus libero nec nulla. Phasellus eget dolor pretium, convallis nisl id, scelerisque libero. Nullam condimentum semper vehicula. Suspendisse potenti. Donec ultricies turpis vel enim varius, sed blandit purus euismod. Vestibulum rhoncus est quis elit congue, id dignissim lacus suscipit.";

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('./Images/event1.jpg')} style={styles.image} />
        <Text style={styles.heading}>Outdoor & Sports Activities expo </Text>
        <View style={styles.descriptionContainer}>
          <Image source={require('./Images/Vector.png')} style={styles.logo} />
          <Text style={styles.descriptionText}>kuwait International club zone-Hall4A</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText1}>Start Date </Text>
          <Text style={styles.dateText2}>End Date</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Image source={require('./Images/calendar-svgrepo-com 1.png')} style={styles.logo} />
          <Text style={styles.descriptionText1}>14 Feb, 2024</Text>
          <Image source={require('./Images/calendar-svgrepo-com 1.png')} style={styles.logo1} />
          <Text style={styles.descriptionText2}>24 March, 2024</Text>
        </View>
        <Text style={styles.heading}>About Event </Text>
        <TouchableOpacity onPress={toggleDescription}>
          <View style={styles.paragraph}>
            <Text numberOfLines={showFullDescription ? undefined : 1} style={styles.descriptionText}>
              {description}
            </Text>
            <Text style={styles.seeMore}>{showFullDescription ? 'See less' : 'See more'}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.heading}>Gallery </Text>
        <TouchableOpacity onPress={() => openModal(require('./Images/event1.jpg'))}>
          <Image source={require('./Images/event1.jpg')} style={styles.image1} />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalHeading}>Gallery</Text>
            <Image source={selectedImage} style={styles.modalImage} />
          </View>
        </Modal>
        <Text style={styles.heading}>Sitemap  </Text>
        <Image source={require('./Images/map.png.jpeg')} style={styles.image2} />
       
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={handleRecommended}>
          <View style={styles.buttonContent}>
            
            <Text style={styles.buttonText}>Recomended Events</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBook}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText1}>Book Now</Text>
            <Image source={require('./Images/Vector (3).png')} style={styles.logo} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {},
  image: {
    width: '100%',
    height: 340,
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 19,
    fontWeight: '600',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logo: {
    width: 20,
    height: 15,
    resizeMode: 'contain',
    marginTop: 5,
  },
  descriptionText: {
    flex: 1,
    fontSize: 16,
    marginTop: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  dateText1: {
    fontSize: 12,
    color: 'grey',
    fontWeight: '600',
  },
  dateText2: {
    fontSize: 12,
    marginLeft: 160,
    color: 'grey',
    fontWeight: '600',
  },
  descriptionText1: {
    fontSize: 15,
    padding: 5,
    fontWeight: 'bold',
  },
  logo1: {
    marginLeft: 60,
    width: 20,
    height: 15,
    resizeMode: 'contain',
    marginTop: 5,
  },
  descriptionText2: {
    fontSize: 15,
    marginLeft: 1,
    padding: 5,
    fontWeight: 'bold',
  },
  paragraph: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMore: {
    color: 'blue',
    marginLeft: 5,
  },
  image1: {
    width: 80,
    height: 78,
    marginTop: 15,
  borderWidth:5,
  borderRadius:10,
  marginHorizontal:15,
  marginBottom:8
  },
  modalContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal:40,
    marginVertical:100,
    borderWidth:1,
    borderRadius:10,
    borderColor:'white',
    
    
  },
  modalImage: {
    width: '84%',
    height: '70%',
    //resizeMode: 'contain',
    justifyContent: 'center',
    top:20,
    borderRadius:5,
    borderWidth:10
  },
  closeButton: {
   position: 'absolute',
    top: 10,
    right: 20,
    padding: 10,
    //backgroundColor: 'white',
   
  },
  closeText: {
    color: 'black',
    fontWeight: 'bold',
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight:200,
    bottom:5
  },
  image2:{
    width: 300,
    height: 150,
    marginTop: 20,
    marginHorizontal:15
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
    
  },
  button: {
    backgroundColor: '#fff',
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
    borderColor:'#0D40A2',
    borderWidth:1,
    backgroundColor:'#0D40A2',

  },
  button1: {
    backgroundColor: '#fff',
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
    borderColor:'#0D40A2',
    borderWidth:1,
    //backgroundColor:'#0D40A2',

  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',

    
    
  },
  buttonText: {
    color: '#0D40A2',
    fontWeight: 'bold',
   
  },
  buttonText1: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 8,
    
    
  },
  logo: {
    width: 15,
    height: 12,
    
  },
});

export default fullScreen;
