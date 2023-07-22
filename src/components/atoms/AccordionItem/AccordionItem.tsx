import React, {FC, useState} from 'react';
import {View, TouchableOpacity, Text, StyleProp, ViewStyle} from 'react-native';
import {SideBarSubSectionprops} from '../../../data/brandsScreen';
import {accordionStyles} from './AccordionItem.styles';
export interface AccordionItemProps {
  title: string;
  subsections?: SideBarSubSectionprops[];
}

export const AccordionItem: FC<AccordionItemProps> = ({subsections, title}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleItem = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity style={accordionStyles.header} onPress={toggleItem}>
        <Text style={accordionStyles.title}>{title}</Text>
      </TouchableOpacity>
      {expanded && (
        <View>
          {subsections?.map((sub, index) => (
            <TouchableOpacity
              key={index}
              style={accordionStyles.navSectionStyle as StyleProp<ViewStyle>}
              onPress={() => console.log('Pressed!')}>
              <View style={{flex: 1}}>
                <Text style={accordionStyles.navItemStyle}>{sub.title}</Text>
              </View>
              <View style={accordionStyles.icon}>
                <Text style={accordionStyles.navItemStyle}>I</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
