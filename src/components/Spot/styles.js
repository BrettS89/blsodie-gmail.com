import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  photo: {
    width: '100%',
    height: 250,
    marginBottom: 15,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 15,
  },
  Subscription: {
    marginBottom: 30,
    paddingHorizontal: 15,
  },
  subscriptions: {
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '700',
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: colors.main,
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 50,
  },
  subTitleText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  items: {
    paddingHorizontal: 15,
    marginBottom: 9,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    height: 40,
    alignItems: 'center',
  },
  itemText: {
    fontWeight: '600',
    fontSize: 16,
  },
  subscribeButtonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: colors.main,
    fontSize: 16,
  }
});