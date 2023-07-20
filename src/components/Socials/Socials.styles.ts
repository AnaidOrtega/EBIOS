import { StyleSheet } from "react-native";
import {elevation10 } from "../../assets/constants/styles";
export const stylesheet = StyleSheet.create({
    card: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        ...elevation10,
        borderRadius: 20,
        padding: 10,
      },
})