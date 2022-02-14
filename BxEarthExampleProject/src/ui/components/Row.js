import React from 'react';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';

const Row = ({item, index, clickHandler, clickedItems}) => {
  const dimensions = Dimensions.get('window');
  return (
    <TouchableOpacity
      onPress={() => {
        clickHandler(index);
      }}
      style={{
        width: dimensions.width * 0.95,
        borderRadius: 10,
        height: 50,
        borderWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        marginVertical: 10,
      }}>
      <View
        style={{
          width: 25,
          marginRight: 15,
          height: 25,
          borderWidth: 1,
          backgroundColor: clickedItems.includes(index) ? 'red' : 'white',
          borderRadius: 5,
        }}></View>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default Row;
