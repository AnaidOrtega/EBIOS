import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Linking} from 'react-native';
import {elevation5} from '../../../styles/globals';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Pdf from '../../../assets/svg/Design/pdf.svg';
import {footer, pdf, title, titleView} from './DocumentList.module.scss';
type DocumentData = {
  title: string;
  url: string;
  img: ImageSourcePropType; // Assuming the 'img' property is a string
};
interface DocumentListProps {
  DocumentList: DocumentData[];
}

export const DocumentList: FC<DocumentListProps> = props => {
  console.log(props);
  const openFile = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      {props.DocumentList?.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.itemContainer}
          onPress={() => openFile(item.url)}>
          <Image source={item.img} style={styles.img} />
          <View style={footer as StyleProp<ViewStyle>}>
            <View style={pdf as StyleProp<ViewStyle>}>
              <Pdf width={30} height={30} />
            </View>
            <View style={titleView as StyleProp<ViewStyle>}>
              <Text style={title as StyleProp<ViewStyle>}>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  img: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemContainer: {
    width: '100%',
    borderRadius: 10,
    ...elevation5,
    backgroundColor: 'white',
    marginVertical: 5,
  },
});
