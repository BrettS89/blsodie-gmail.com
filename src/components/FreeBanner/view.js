import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const FreeBannerView = ({ closeFreeBanner }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The first week/month of your first subscription is on us!
      </Text>
      <TouchableOpacity onPress={closeFreeBanner}>
        <Icon name="close" size={16} color="#fff" />
        {/* <Text style={styles.text}>
          x
        </Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default FreeBannerView;
