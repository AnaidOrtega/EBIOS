import {useEffect, useState} from 'react';
import {View, Text, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import {btnRegV, label, labelTxt, labelform} from './Formulario.module.scss';
import {Formik} from 'formik';
// import moment = require('moment');
import {TextInput} from 'react-native';
import {stylesheet} from './Formulario.styles';
import {ButtonGroupPicker} from './ButtonGroupPicker';
import DateTimePicker from '@react-native-community/datetimepicker';

interface InputFieldProps {
  placeHolder: string;
  name: string;
}

const presentaciones = ['1 Litro', '10 Litros', '20 Litros'];
const Paqueterias = ['Paquetería TRESGUERRAS', 'Otra'];
const initialValues = [
  {placeHolder: 'Nombre Completo', name: 'nombre_completo'},
  {placeHolder: 'Nombre del Producto', name: 'nombre_producto'},
  {placeHolder: 'Dirección de entrega', name: 'direccion'},
  {placeHolder: 'Correo de contacto', name: 'correo'},
] as InputFieldProps[];

export const Formulario = () => {
  const [company, setCompany] = useState('Paquetería TRESGUERRAS');
  const [presentacion, setPresentacion] = useState('1 Litro');

  const [date, setDate] = useState<Date | undefined>(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setShow(false);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  useEffect(() => {
    console.log('Company: ', company);
    console.log('Presentacion: ', presentacion);
  }, [company, presentacion]);

  return (
    <View style={stylesheet.dataPart as StyleProp<ViewStyle>}>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {({/*handleChange, handleBlur, handleSubmit,*/ values}) => (
          <View style={btnRegV as StyleProp<ViewStyle>}>
            {values?.map(value => (
              <View style={{width: '100%'}} key={value.name}>
                <Text style={labelform as StyleProp<ViewStyle>}>
                  {value.placeHolder}
                </Text>
                <TextInput
                  style={stylesheet.input as StyleProp<ViewStyle>}
                  placeholder={value.placeHolder}
                />
              </View>
            ))}
            <ButtonGroupPicker
              title="Presentación del producto"
              values={presentaciones}
              onChange={value => setPresentacion(value)}
            />
            <ButtonGroupPicker
              title="Escoge tu compañía de entrega"
              values={Paqueterias}
              onChange={value => setCompany(value)}
            />
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
                is24Hour={true}
                value={date ?? new Date()}
                testID="dateTimePicker"
                onChange={(_, selectedDate) => handleDateChange(selectedDate)}
              />
            )}
            <TouchableOpacity style={stylesheet.btn}>
              <Text style={stylesheet.btnTxt}>Envía tu pedido!</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};
