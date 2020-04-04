import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import { SET_SPOT_ID } from '../../redux/actions';

const Spots = props => {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots.spots);

  function goToSpot(id) {
    dispatch({ type: SET_SPOT_ID, payload: id });
    props.navigation.navigate('Spot');
  }

  return (
    <View
      spots={spots}
      goToSpot={goToSpot}
    />
  );
};

export default Spots;
