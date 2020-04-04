import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import SpotCard from './components/SpotCard';

const SpotsView = ({ spots, goToSpot }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={spots}
        keyExtractor={post => post._id}
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
