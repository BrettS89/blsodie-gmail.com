import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  Subscription: {
    marginBottom: 50,
  },
  subTitle: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.main,
    borderRadius: 50,
  },
  subTitleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  itemsContainer: {
    paddingHorizontal: 15,
  },
  Item: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  itemSection: {
    width: '33%',
  },
  itemText: {
    fontWeight: '600',
    fontSize: 15,
  },
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
  },
  cancelled: {
    marginTop: 7,
    paddingHorizontal: 15,
    color: '#ff0000',
    fontSize: 12,
  },
  noSubs: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noSubsContent: {
    alignItems: 'center',
  },
  noSubsText: {
    fontWeight: '700',
    marginBottom: 10
  }
});
