import React from "react"

import { FC } from "react"
import { View, Text, StyleProp, ViewStyle } from "react-native"
import { containerSection, title } from "./SectionDivider.module.scss"


export const SectionDivider =({ titulo}:{titulo:String}) =>{
    return (
        <View style={containerSection as StyleProp<ViewStyle>}>
        <Text style={title as StyleProp<ViewStyle>}>{titulo}</Text>
      </View>)
}