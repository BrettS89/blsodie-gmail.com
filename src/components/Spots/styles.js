import { Platform, StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';


export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: Platform.isPad ? 'center' : 'stretch',
    backgroundColor: '#fff',
  },
  SpotCard: {
    width: Platform.isPad ? 600 : '100%',
    marginBottom: 30,
  },
  text: {
    marginBottom: 7,
    fontSize: 16,
    fontWeight: '700'
  },
  photo: {
    width: '100%',
    height: 250,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  buttonText: {
    fontWeight: '700',
    color: colors.main,
    fontSize: 14,
    marginRight: 6,
  }
});
