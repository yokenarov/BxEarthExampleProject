import React from 'react';
import {View, Dimensions, Text} from 'react-native';

const Header = ({clickedItems}) => {
  const dimensions = Dimensions.get('window');
  console.log(clickedItems);
  return (
    <View
      style={{
        width: dimensions.width * 0.95,
        height: dimensions.height * 0.1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: 'gray',
        paddingLeft: 10,
      }}>
      <Text>Selected rows: {clickedItems.join(", ")}</Text>
    </View>
  );
};

export default Header;
