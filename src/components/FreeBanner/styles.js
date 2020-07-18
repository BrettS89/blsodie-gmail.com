import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.main,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff',
  }
});
