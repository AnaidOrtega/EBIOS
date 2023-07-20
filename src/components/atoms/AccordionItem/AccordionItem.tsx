import {FC, PropsWithChildren, useState} from 'react';
import {View, TouchableOpacity, Text, StyleProp, ViewStyle} from 'react-native';
import styles from './AccordionItem.module.scss';
export interface AccordionItemProps extends PropsWithChildren {
  title: string;
}

export const AccordionItem: FC<AccordionItemProps> = ({children, title}) => {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = (
    <View style={styles.body as StyleProp<ViewStyle>}>{children}</View>
  );

  return (
    <View style={styles.accord as StyleProp<ViewStyle>}>
      <TouchableOpacity
        style={styles.header as StyleProp<ViewStyle>}
        onPress={toggleItem}>
        <Text style={styles.title as StyleProp<ViewStyle>}>{title}</Text>
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
};
