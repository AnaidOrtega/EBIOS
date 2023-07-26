import {StyleSheet} from 'react-native';

import {elevation10} from '../../../styles/globals';
export const sidebarStyles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    width: 165,
    margin: 15,
    backgroundColor: 'white',
    height: 165,
    borderRadius: 265,
    justifyContent: 'center',

    alignItems: 'center',
    ...elevation10,
  },
});
