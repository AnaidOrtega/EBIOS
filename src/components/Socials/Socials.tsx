import React from "react"
import { FC } from "react"
import { MainStakcProp } from "../SectionDivider/SectionDivider"
import { View,StyleProp ,ViewStyle,Text,TouchableOpacity, Linking} from "react-native"
import { container, title, view } from "./Socials.module.scss"
import { stylesheet } from "./Socials.styles"
import {socials} from '../../assets/constants/data';
export const Socials: FC<MainStakcProp>= ({navigation})=> {  
return( 
<View style={container as StyleProp<ViewStyle>}>
    {socials.map((item,index) => (
 <TouchableOpacity
 style={view as StyleProp<ViewStyle> }
 onPress={() => {
     Linking.openURL(item.url)
 }}>
 <View style={stylesheet.card}>
   {/*<this.item.Icon width={30} height={30} /> poner aqui svg*/}
   <Text style={title as StyleProp<ViewStyle>}>{item.title}</Text>
 </View>
</TouchableOpacity>
    ))}
       
</View>)
}