import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, } from 'react-native';

const SegmentedButton = ({ options, selectedIndex, onChange }) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.segment, selectedIndex === index && styles.selectedSegment]}
          onPress={() => onChange(index)}
        >
          <Text style={styles.segmentText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10
    
  },
  segment: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    
  },
  selectedSegment: {
    backgroundColor: '#007BFF',
  },
  segmentText: {
    color: '#000000',
  },
});

export default SegmentedButton;
