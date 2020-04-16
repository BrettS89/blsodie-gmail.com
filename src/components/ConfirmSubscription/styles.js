import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: 250,
    borderRadius: 4,
    marginBottom: 15,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  buttonContainer: {
    marginTop: 25,
    alignItems:'center',
  },
  button: {
    width: 260,
  },
  buttonText: {
    fontSize: 16,
  }
});
