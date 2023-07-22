import {StyleSheet} from 'react-native';

export const cardListStyles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    gap: 10,
  },
  view: {
    borderRadius: 150,
  },
  card: {
    width: 130,
    height: 130,
    padding: 10,
    borderRadius: 130,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  option: {
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  optionText: {
    fontSize: 10,
    marginRight: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});
