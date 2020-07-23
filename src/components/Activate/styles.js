import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inputs: {
    marginTop: 75,
    flexDirection: 'row',
  },
  inputBox: {
    height: 40,
    width: 45,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  input: {
    color: '#000',
    textAlign: 'center',
    fontSize: 26,
    flex: 5
  }
});
