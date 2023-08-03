import React, {FC, useState} from 'react';
import {View, TouchableOpacity, Text, StyleProp, ViewStyle} from 'react-native';
import {BrandProps, SideBarSubSectionprops} from '../../../data/brandsScreen';
import {accordionStyles} from './AccordionItem.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Minus from '../../../assets/svg/Design/minus.svg';
import Plus from '../../../assets/svg/Design/plus.svg';
export interface AccordionItemProps {
  title: string;
  subsections?: SideBarSubSectionprops[];
  data?: BrandProps;
}
export const AccordionItem: FC<AccordionItemProps> = ({
  subsections,
  title,
  data,
}) => {
  const [expanded, setExpanded] = useState(false);
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  const toggleItem = () => {
    setExpanded(!expanded);
  };

  const handleNavigation = (selectedCrop: any) => {
    console.log(selectedCrop);
    if (selectedCrop.title === 'Casos de éxito') {
      // VER QUE SHOW
      navigate('Casos de éxito', {
        params: {selectedProduct: data?.screenLabel},
      });
    } else if (selectedCrop.title === 'Campos de Golf') {
      navigate('Casos de éxito', {
        params: {selectedProduct: selectedCrop.title},
      });
    } else if (selectedCrop.title === 'Áreas Deportivas') {
      navigate('Casos de éxito', {
        params: {selectedProduct: selectedCrop.title},
      });
    } else if (selectedCrop.title === 'Viveros') {
      navigate('Casos de éxito', {
        params: {selectedProduct: selectedCrop.title},
      });
    } else {
      navigate('Cultivos', {
        params: {cultivo: selectedCrop.title},
      });
    }
  };

  return (
    <View>
      <TouchableOpacity style={accordionStyles.header} onPress={toggleItem}>
        <Text style={accordionStyles.title}>{title}</Text>
        {expanded ? (
          <Minus width={20} height={20} />
        ) : (
          <Plus width={20} height={20} />
        )}
      </TouchableOpacity>
      {expanded && (
        <View>
          {subsections?.map((sub, index) => (
            <TouchableOpacity
              key={index}
              style={accordionStyles.navSectionStyle as StyleProp<ViewStyle>}
              onPress={() => handleNavigation(sub)}>
              <View style={{flex: 1}}>
                <Text style={accordionStyles.navItemStyle}>{sub.title}</Text>
              </View>
              <View style={accordionStyles.icon}>
                <sub.icon width={20} height={20} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
