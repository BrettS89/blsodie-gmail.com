import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  section: {
    marginBottom: 30,
  },
  firstTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logout: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.main,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    marginRight: 15,
  },
  cardText: {
    fontSize: 15,
    fontWeight: '500',
  },
  replaceCard: {
    color: colors.main,
    fontSize: 15,
    fontWeight: '600',
  },
  Subscription: {
    marginBottom: 30,
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: 240,
    borderRadius: 4,
    marginBottom: 10,
  },
  subText: {
    fontWeight: '600',
    marginBottom: 5,
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
    marginBottom: 10
  },
  tokensIcon: {
    marginVertical: 25,
  },
  noThanksText: {
    fontWeight: '700',
    color: colors.main,
  },
  NotLoggedInView: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  or: {
    marginVertical: 10,
  },
  warning: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
  }
});
