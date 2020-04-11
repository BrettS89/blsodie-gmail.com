import React from 'react';
import View from './view';

const TnC = props => {
  function navigate(screen) {
    props.navigation.navigate(screen);
  }

  return (
    <View
      navigate={navigate}
    />
  );
};

export default TnC;
