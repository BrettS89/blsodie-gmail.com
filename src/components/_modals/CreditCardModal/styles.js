import { StyleSheet } from 'react-native';
import colors from '../../../shared/styles/colors';

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  modalContentContainer: {
    width: '70%',
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  exit: {
    width: '100%',
    alignItems: 'flex-end',
  },
  modalTitle: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30
  },
  tokensIcon: {
    marginVertical: 25,
  },
  noThanksText: {
    fontWeight: '700',
    color: colors.main,
    fontSize: 15,
  },
});
