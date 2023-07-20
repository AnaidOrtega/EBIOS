import { StyleSheet } from "react-native";
import { width,elevation10 } from "../../assets/constants/styles";
export const stylesheet = StyleSheet.create({
    view: {
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      container: {
        width: width / 2.9,
        height: width / 3,
        borderRadius: width / 3,
        justifyContent: 'center',
        ...elevation10,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
      },
      bg: {
        width: width / 4,
        height: width / 4,
        borderRadius: width / 4,
        backgroundColor: '#0d1a1b',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      card: {
        width: width / 3,
        height: width / 3,
        borderRadius: width / 3,
        backgroundColor: 'white',
        marginVertical: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      },
})