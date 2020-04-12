
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../styles/colors';

const LocationSearch = props => {
  return (
    <View style={styles.container}>
      <Icon name="map-marker-alt" size={24} color={colors.main} />
      <View style={styles.searchBar}>
        <TextInput 
          placeholder="zip"
          value="07302"
          underlineColorAndroid="transparent"
          color="grey"
          style={{ fontSize: 16 }}
        />
      </View>
    </View>
  );
};

export default LocationSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  backButton: {
    marginRight: 25,
    alignItems: 'center',
  },
  searchBar: {
    width: 50,
    marginLeft: 9,
  }
});
