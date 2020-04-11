import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 50,
  },
  formContainer: {
    width: 300,
    marginBottom: 15,
    marginTop: 60
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: colors.main,
    marginTop: 15,
    borderRadius: 50,
    height: 45
  },
  inputContainer: {
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
});
