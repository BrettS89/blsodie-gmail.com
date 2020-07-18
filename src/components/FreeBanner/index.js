import React from 'react';
import { AsyncStorage, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_FREE_BANNER } from '../../redux/actions';
import FreeBannerView from './view';

const FreeBanner = props => {
  const dispatch = useDispatch();
  const showFreeBanner = useSelector(state => state.app.showFreeBanner);

  async function closeFreeBanner() {
    await AsyncStorage.setItem('showFreeBanner', 'false');
    dispatch({ type: CLOSE_FREE_BANNER });
  }

  return showFreeBanner & showFreeBanner !== null
    ? <FreeBannerView closeFreeBanner={closeFreeBanner} />
    : <View />
};

export default FreeBanner;
