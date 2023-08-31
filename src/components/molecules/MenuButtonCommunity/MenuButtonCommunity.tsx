import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {width} from '../../../styles/globals';
import {useState} from 'react';
import WorldPlant from '../../../assets/svg/Design/worldplant.svg';
import Favorites from '../../../assets/svg/Design/favorites.svg';
export interface OtherComponentProps {
  tabFunction: (all: boolean, fav: boolean) => void;
}
export const MenuButtonCommunity: FC<OtherComponentProps> = ({tabFunction}) => {
  const [all, setall] = useState(true);
  const [favorites, setfavorites] = useState(false);

  return (
    <View style={styles.buttonV}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => tabFunction(true, false)}>
        <WorldPlant />
        <Text
          style={{
            marginTop: 5,
            color: all ? '#007AFF' : 'black',
          }}>
          Todos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => tabFunction(false, true)}>
        <Favorites />
        <Text
          style={{
            marginTop: 5,
            color: favorites ? '#007AFF' : 'black',
          }}>
          Favoritos del mes
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonV: {
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    borderColor: 'lightgrey',
  },
  menuButton: {
    width: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRightWidth: 0.5,
    borderColor: 'lightgrey',
    height: 'auto',
  },
});
