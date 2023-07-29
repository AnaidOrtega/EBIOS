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
import Circle from '../../../../assets/svg/HomeStoma/StomaCircle.svg';
import StomaBg from '../../../../assets/img/backgrounds/stomabg.jpeg';
import {DocumentList} from '../../../atoms/DocumentList/DocumentList';
import {stomaResearches} from '../../../../data/beneficiosScreen';
import {container} from './Stoma.module.scss';
export const Stoma: FC<{}> = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={container as StyleProp<ViewStyle>}>
        <ImageBackground source={StomaBg} style={styles.bg}>
          <View style={styles.svgBg}>
            <Circle width={width - 20} height={width - 20} />
          </View>
        </ImageBackground>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>INVESTIGACIONES</Text>
        </View>
        <DocumentList DocumentList={stomaResearches} />
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
