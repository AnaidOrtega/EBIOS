import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {FC} from 'react';
import {Text} from 'react-native';
import {BrandProps} from '../../../data/brandsScreen';
import {AccordionItem} from '../../atoms';


export interface DrawerConentProps {
  contentProps: DrawerContentComponentProps;
  data: BrandProps;
}

export const BrandSideBar: FC<DrawerConentProps> = ({data}) => {
  return (
    <DrawerContentScrollView>
      <Text>HERE SCROLL</Text>
      <Text>{data.screenLabel}</Text>
      {data.sections?.map(item => (
        <AccordionItem title={item.title} key={item.title}>
          {item.subsections.map(sub => (
            <Text>{sub.title} </Text>
          ))}
        </AccordionItem>
      ))}
    </DrawerContentScrollView>
  );
};