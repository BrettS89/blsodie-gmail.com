import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  button: {
    marginBottom: 15,
  },
  buttonText: {
    color: colors.main,
    fontSize: 16,
    fontWeight: '700',
  }
});
