import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(188,153,178,0.2)'
  },
  subContainer: {
    flex: 1,
    margin: 12,
  },
  listWrapper: {
    flex: 9,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
    minHeight: 150,
    borderRadius: 2,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
    elevation: 2,
  },
  cardSubContainer: {
    margin: 10,
  },
  cardHeaderWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  jobTypeText: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 5,
  },
  locationText: {
    fontSize: 14,
    color: '#AAAAAA'
  },
  callCountContainer: {
    alignItems: 'center',
  },
  callCount: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ctaWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 8,
    marginRight: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postingStatusText: {
    color: '#AAAAAA',
    marginRight: 3,
  },
  postingStatusDate: {
    color: '#AAAAAA',
  },
  rowWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  walletWrapper: {
    backgroundColor: '#64047C',
    flex: 0.2,
    justifyContent: 'center',
  },
  walletCardContainer: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 2,
    justifyContent: 'center'
  },
  walletSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center'
  },
  walletHeaderText: {
    color: '#64047C',
    fontSize: 16,
    marginBottom: 5,
  },
  walletBalance: {
    color: '#64047C',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rechargeCta: {
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
    elevation: 2,
  },
  activationStatus: {
    marginLeft: 4,
  }
});