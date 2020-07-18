import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import FreeBanner from '../FreeBanner';
import SpotCard from './components/SpotCard';

const SpotsView = ({ spots, goToSpot }) => {
  return (
    <View style={styles.container}>
      <FreeBanner />
      <FlatList
        data={spots}
        keyExtractor={spot => spot._id}
        showsVerticalScrollIndicator={false}
        renderItem={s => (
          <SpotCard
            spot={s.item}
            goToSpot={goToSpot}
          />
        )}
      />
    </View>
  );
};

export default SpotsView;
