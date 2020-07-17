import { Platform, StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';
const ipad = Platform.isPad

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  photo: {
    width: '100%',
    height: ipad ? 450 : 250,
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
    paddingHorizontal: ipad ? 150 : 15,
  },
  subscriptions: {
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '700',
    fontSize: ipad ? 20 : 14,
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
    marginBottom: 7,
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
  description: {
    marginBottom: 7,
    paddingHorizontal: 15,
  },
  descriptionText: {
    fontSize: 13,
  },
  subscribeButtonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: colors.main,
    fontSize: 16,
  }
});