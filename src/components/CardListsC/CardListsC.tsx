import { FC } from "react";
import React from "react";
import { MainStakcProp } from "../../screens";
import { View, Text, StyleProp, ViewStyle,ImageBackground,TouchableOpacity,StyleSheet } from "react-native";
import { container, option, optionText } from "./CardListsC.module.scss";
import { bg,view } from "../CardList/CardList.module.scss";
import { stylesheet } from "./CardListsC.styles";

export const CardListsC : FC<MainStakcProp>= ({navigation})=> {
return (
    <View style={container  as StyleProp<ViewStyle> }>
     <TouchableOpacity
        style={stylesheet.view as  StyleProp<ViewStyle>}
        onPress={() =>
            navigation.navigate('Drawer', {
              screen: 'Brands',
              params: {
                params: {
                  selectedProduct: 'Chronos',
                },
              },
            })
          }>
        <View style={stylesheet.view} >
          <ImageBackground
            style={stylesheet.bg as  StyleProp<ViewStyle>}
            imageStyle={{borderRadius: 100}}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
           >
            <View style={stylesheet.card as StyleProp<ViewStyle>}>
            
            </View>
          </ImageBackground>
        </View>
        <View style={option  as StyleProp<ViewStyle> }> 
          <Text style={optionText as StyleProp<ViewStyle>}>COTIZACIÓN </Text>
       
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={stylesheet.view as  StyleProp<ViewStyle>}
        onPress={() =>
            navigation.navigate('Drawer', {
              screen: 'Brands',
              params: {
                params: {
                  selectedProduct: 'Chronos',
                },
              },
            })
          }>
        <View style={stylesheet.view} >
          <ImageBackground
            style={stylesheet.bg as  StyleProp<ViewStyle>}
            imageStyle={{borderRadius: 100}}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
           >
            <View style={stylesheet.card as StyleProp<ViewStyle>}>
            
            </View>
          </ImageBackground>
        </View>
        <View style={option  as StyleProp<ViewStyle> }> 
          <Text style={optionText as StyleProp<ViewStyle>}>AMIGOS DE LOS AMANECERES </Text>
       
        </View>
      </TouchableOpacity>

    </View>
)
}