import React, {FC} from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
export interface ComunidadProps {
  label?: string;
}
import {useState} from 'react';
import {MenuButtonCommunity} from '../../molecules/MenuButtonCommunity/MenuButtonCommunity';
import {AllPhotos} from '../../molecules/AllPhotos/AllPhotos';
export const Comunidad: FC<ComunidadProps> = () => {
  const [all, setall] = useState(true);
  const [favorites, setfavorites] = useState(false);
  const tabFunction = (all: boolean, fav: boolean) => {
    setall(all);
    setfavorites(fav);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.text}>Checa nuestros cultivos!</Text>
        </View>
        <MenuButtonCommunity tabFunction={tabFunction.bind(this)} />
        <View style={styles.pics}>
          {all && <AllPhotos></AllPhotos>}
          {favorites && <Text></Text>}
          {/*this.state.all && <AllPhotos />*/}
          {/*this.state.favorites && <Favorites />*/}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  banner: {
    width: '100%',
    backgroundColor: '#121e2f',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'white', fontWeight: 'bold'},
  pics: {width: '100%', height: 'auto', paddingTop: 10},
});
