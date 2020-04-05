import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: 250,
    borderRadius: 4,
    marginBottom: 60,
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 15,
  },
  buttonContainer: {
    marginHorizontal: 15,
    marginBottom: 30,
  },
  button: {
    height: 50,
  },
  buttonText: {
    fontSize: 16,
  }
});
