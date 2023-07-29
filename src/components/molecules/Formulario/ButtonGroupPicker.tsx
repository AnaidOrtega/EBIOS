import {useEffect, useState} from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {label, labelTxt} from './Formulario.module.scss';
import {ButtonGroup} from '@rneui/themed';

export interface ButtonGroupPickerProps {
  title: string;
  values: string[];
  onChange: (value: string) => void;
}

export const ButtonGroupPicker: React.FC<ButtonGroupPickerProps> = ({
  title,
  values,
  onChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    onChange(values[activeIndex]);
  }, [activeIndex, onChange, values]);

  return (
    <View style={label as StyleProp<ViewStyle>}>
      <Text style={labelTxt as StyleProp<ViewStyle>}>{title}</Text>
      <ButtonGroup
        buttons={values}
        selectedIndex={activeIndex}
        textStyle={{color: 'black'}}
        containerStyle={{borderRadius: 20}}
        selectedTextStyle={{color: '#89D00B'}}
        onPress={index => setActiveIndex(index)}
        buttonStyle={{backgroundColor: 'white'}}
        selectedButtonStyle={{backgroundColor: 'black'}}
      />
    </View>
  );
};
