import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';

const Spots = props => {
  const spots = useSelector(state => state.spots.spots);
  function goToSpot() {

  }

  return (
    <View
      spots={spots}
      gotToSpot={goToSpot}
    />
  );
};

export default Spots;
