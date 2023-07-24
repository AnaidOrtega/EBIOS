import {
  View,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  btn,
  btn2,
  btnRegV,
  btnTxt,
  container,
  containerStyle,
  label,
  labelTxt,
  labelform,
} from './Formulario.module.scss';
import {stylesheet} from './Formulario.styles';
import {TextInput, Button} from 'react-native';
import {ButtonGroup, CheckBox} from '@rneui/themed';
import {FC, useState} from 'react';
type FormularioProps = {
  order: Function;
};
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
const presentaciones = ['1 Litro', '10 Litros', '20 Litros'];
const Paqueterias = ['Paquetería TRESGUERRAS', 'Otra'];
import moment = require('moment');

interface UpdateIndexProps {
  selectedIndex: number;
}

export const Formulario: React.FC<UpdateIndexProps> = () => {
  //Presentacion
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexCompañia, setselectedIndexCompañia] = useState(0);
  const [valueCompañia, setvalueCompañia] = useState('Paquetería TRESGUERRAS');
  const [value, setValue] = useState('1 Litro');

  //Presentacion
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  //Paqueteria

  //Paqueteria

  return (
    <View style={stylesheet.dataPart as StyleProp<ViewStyle>}>
      <Formik
        initialValues={{email: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={btnRegV as StyleProp<ViewStyle>}>
            <View style={{width: '100%'}}>
              <Text style={labelform as StyleProp<ViewStyle>}>
                Nombre Completo
              </Text>
              <TextInput
                style={stylesheet.input as StyleProp<ViewStyle>}
                placeholder="Nombre Completo"></TextInput>
            </View>

            <View style={{width: '100%'}}>
              <Text style={labelform as StyleProp<ViewStyle>}>
                Nombre del producto
              </Text>
              <TextInput
                style={stylesheet.input as StyleProp<ViewStyle>}
                placeholder="Nombre del producto"></TextInput>
            </View>

            <View style={{width: '100%'}}>
              <Text style={labelform as StyleProp<ViewStyle>}>
                Direccion de entrega
              </Text>
              <TextInput
                style={stylesheet.input as StyleProp<ViewStyle>}
                placeholder="  Direccion de entrega"></TextInput>
            </View>

            <View style={{width: '100%'}}>
              <Text style={labelform as StyleProp<ViewStyle>}>
                Correo de contacto
              </Text>
              <TextInput
                style={stylesheet.input as StyleProp<ViewStyle>}
                placeholder="   Correo de contacto"></TextInput>
            </View>

            <View style={container as StyleProp<ViewStyle>}>
              <View style={label as StyleProp<ViewStyle>}>
                <Text style={labelTxt as StyleProp<ViewStyle>}>
                  Presentación del producto
                </Text>
              </View>
              <ButtonGroup
                onPress={selectedIndex => {
                  // Handle button group press here
                  setSelectedIndex(selectedIndex);
                  if (selectedIndex === 0) {
                    setValue('1 Litro');
                    setSelectedIndex(0);
                  } else if (selectedIndex === 1) {
                    setValue('10 Litros');
                    setSelectedIndex(1);
                  } else {
                    setValue('20 Litros');
                    setSelectedIndex(2);
                  }
                }}
                selectedIndex={selectedIndex}
                buttons={presentaciones}
                containerStyle={{height: 100}}
                buttonStyle={{backgroundColor: 'white'}}
                containerStyle={[containerStyle as StyleProp<ViewStyle>]}
                selectedButtonStyle={{backgroundColor: 'black'}}
                textStyle={{color: 'black'}}
                selectedTextStyle={{color: '#89D00B'}}
              />
            </View>
            <View style={container as StyleProp<ViewStyle>}>
              <View style={label as StyleProp<ViewStyle>}>
                <Text style={labelTxt as StyleProp<ViewStyle>}>
                  Escoge tu compañia de entrega
                </Text>
                <ButtonGroup
                  onPress={selectedIndexCompañia => {
                    // Handle button group press here
                    setselectedIndexCompañia(selectedIndexCompañia);
                    if (selectedIndexCompañia === 0) {
                      setValue('Paquetería TRESGUERRAS');
                      setselectedIndexCompañia(0);
                    } else if (selectedIndexCompañia === 1) {
                      setValue('Otra');
                      setselectedIndexCompañia(1);
                    }
                  }}
                  selectedIndex={selectedIndexCompañia}
                  buttons={Paqueterias}
                  containerStyle={{height: 100}}
                  buttonStyle={{backgroundColor: 'white'}}
                  containerStyle={[containerStyle as StyleProp<ViewStyle>]}
                  selectedButtonStyle={{backgroundColor: 'black'}}
                  textStyle={{color: 'black'}}
                  selectedTextStyle={{color: '#89D00B'}}
                />
              </View>
            </View>
            <View style={container as StyleProp<ViewStyle>}>
              <View style={label as StyleProp<ViewStyle>}>
                <Text style={labelTxt as StyleProp<ViewStyle>}>
                  Proporciona una fecha de entrega
                </Text>
              </View>

              <TouchableOpacity onPress={showDatepicker} style={stylesheet.btn}>
                <Text style={stylesheet.btnTxt}>
                  Selecciona La Fecha De Entrega
                </Text>
              </TouchableOpacity>

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </View>

            <TouchableOpacity style={stylesheet.btn}>
              <Text style={stylesheet.btnTxt}>Envía tu pedido!</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};
