import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({props }) => {
  const { heading } = props;
//   console.log({heading})
// console.log(route)
  return (
    <View>
      <Text>{heading}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default DetailsScreen;