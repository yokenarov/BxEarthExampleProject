import React from 'react';
import {FlatList, View} from 'react-native';
import Row from './Row';
const List = ({data, clickHandler, clickedItems}) => {
  return (
    <FlatList
      contentContainerStyle={{
        alignItems: 'center',
      }}
      data={data}
      keyExtractor={(item, index) => {
        index.toString();
      }}
      renderItem={({item, index}) => {
        return (
          <Row
            clickedItems={clickedItems}
            clickHandler={clickHandler}
            item={item}
            index={index}></Row>
        );
      }}></FlatList>
  );
};

export default List;
