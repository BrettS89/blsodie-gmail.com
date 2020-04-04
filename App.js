import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux';
import Navigation from './src/navigation';

// Modals
import LoadingModal from './src/shared/components/LoadingModal';

export default function App() {
  return (
    <Provider store={store()}>
      <View style={styles.container}>
        <Navigation />
        <LoadingModal />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
