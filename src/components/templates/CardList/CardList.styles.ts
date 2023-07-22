import {StyleSheet} from 'react-native';
import {elevation10, width} from '../../../styles/globals';

export const cardListStyles = StyleSheet.create({
  view: {
    paddingTop: 30,
    width: width / 3.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  container: {
    width: width / 2.9,
    height: width / 3,
    borderRadius: width / 3,
    justifyContent: 'center',
    ...elevation10,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  bg: {
    width: width / 4,
    height: width / 4,
    borderRadius: width / 4,
    backgroundColor: '#0d1a1b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: width / 3,
    height: width / 3,
    borderRadius: width / 3,
    backgroundColor: 'white',
    marginVertical: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
    marginTop: 10,
  },
  optionText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 5,
  },
});
