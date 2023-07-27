import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  ViewStyle,
  StyleProp,
  Text,
} from 'react-native';
import {width} from '../../../../styles/globals';
import Circle from '../../../../assets/svg/HomeChronos/ChronosCircle.svg';
import ChronosBg from '../../../../assets/img/backgrounds/chronosbg.png';
import {container} from './Chronos.module';
import {DocumentList} from '../../../atoms/DocumentList/DocumentList';
import {chronosResearches} from '../../../../data/beneficiosScreen';
export const Chronos: FC<{}> = props => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={container as StyleProp<ViewStyle>}>
        <ImageBackground source={ChronosBg} style={styles.bg}>
          <View style={styles.svgBg}>
            <Circle width={width - 20} height={width - 20} />
          </View>
        </ImageBackground>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>INVESTIGACIONES</Text>
        </View>
        <DocumentList DocumentList={chronosResearches}></DocumentList>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  bg: {
    width: width,
    height: width,
  },
  svgBg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  banner: {
    width: '100%',
    backgroundColor: '#121e2f',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
