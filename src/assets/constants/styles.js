import {Dimensions, Platform} from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

export const height = Math.round(Dimensions.get('window').height);
export const width = Math.round(Dimensions.get('window').width);

export const safeAreaTop = StaticSafeAreaInsets.safeAreaInsetsTop;
export const safeAreaBottom = StaticSafeAreaInsets.safeAreaInsetsBottom;

export const elevation10 = {
  ...Platform.select({
    ios: {
      shadowRadius: 10,
      shadowColor: 'black',
      shadowOffset: {width: 10, height: 10},
      shadowOpacity: 0.2,
    },
    android: {
      elevation: 10,
    },
  }),
};

export const elevation5 = {
  ...Platform.select({
    ios: {
      shadowRadius: 5,
      shadowColor: 'black',
      shadowOffset: {width: 5, height: 5},
      shadowOpacity: 0.2,
    },
    android: {
      elevation: 5,
    },
  }),
};
