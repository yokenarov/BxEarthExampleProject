/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import dummyData from './src/dummyData/dummyData';
import List from './src/ui/components/List';
import Header from './src/ui/components/Header';
const App = () => {
  const dimensions = Dimensions.get('window');
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    alignItems: 'center',
  };
  const [clickedItems, setClickedItems] = useState([]);
  const clickHandler = index => {
    if (!clickedItems.includes(index)) {
      setClickedItems([...clickedItems, index]);
    }
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header clickedItems={clickedItems}></Header>
      <View
        style={{
          width: '100%',
          height: dimensions.height * 0.7,
          backgroundColor: 'white',
        }}>
        <List
          data={dummyData}
          clickHandler={clickHandler}
          clickedItems={clickedItems}></List>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
