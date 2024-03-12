
// import React from 'react';
// import { View, FlatList, TouchableOpacity, Image,} from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import DetailsScreen from './DetailsScreen';
// import BoxComponent from './BoxComponent';

// const Stack = createStackNavigator();


// const data = [
//     { id: '1', logo: require('../images/roller-coaster-svgrepo-com 1.png'), heading: 'Experiences' },
//     { id: '2', logo: require('../images/icon.png'), heading: 'Game' },
//     { id: '4', logo: require('../images/swimming-svgrepo-com 1.png'), heading: 'Water Games' },
//     { id: '5', logo: require('../images/theater-masks-svgrepo-com 1.png'), heading: 'Theatre' },
//     { id: '6', logo: require('../images/restaurant-outline-svgrepo-com 1.png'), heading: 'Restaurant' },
//     { id: '7', logo: require('../images/kids-couple-svgrepo-com 1.png'), heading: 'Kids' },
//     { id: '8', logo: require('../images/family-4-people-svgrepo-com 1.png'), heading: 'Families' },
//     { id: '9', logo: require('../images/paris-louvre-svgrepo-com 1.png'), heading: 'Exhibition' },
//     { id: '10', logo: require('../images/shopping-bag-svgrepo-com 1.png'), heading: 'Shopping' },
//     { id: '11', logo: require('../images/microphone-svgrepo-com 1.png'), heading: 'Concert' },
//     { id: '12', logo: require('../images/cafe-svgrepo-com 1.png'), heading: 'Cafe' },
//     { id: '13', logo: require('../images/art-gallery-svgrepo-com 1.png'), heading: 'Art' },

// ];


// const Trial = () => {
//   return (
    
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Select Your interest">
        
//         <Stack.Screen name="select your intrest"
//         options={{
//           title: "Select Your Interest",
//           headerStyle: { backgroundColor: '#F9423A' },
//           headerTintColor: '#fff',
//         }}
//       >
//           {() => <BoxList data={data} />}
//         </Stack.Screen>
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const BoxList = ({ data }) => {
//   const navigation = useNavigation();
//   console.log("this is navagation",navigation)
//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigation.navigate('Details', { heading: item.heading })}>
//       <BoxComponent logo={item.logo} heading={item.heading} />
//     </TouchableOpacity>
//   );

//   return (
  
//     <View style={{ flex: 1, backgroundColor: 'red' }}>
//     <FlatList
//       data={data}
//       numColumns={3}
//       keyExtractor={(item) => item.id}
//       renderItem={renderItem}
//     />


//      </View>
     
//   );
// };



// export default Trial;
