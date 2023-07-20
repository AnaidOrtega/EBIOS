import React, { FC } from "react";
import { View, Text, StyleProp, ViewStyle,ImageBackground,TouchableOpacity,StyleSheet } from "react-native"
import { bg, card, container, containerCardlist,view     } from "./CardList.module.scss";
import { logos } from '../../assets/constants/data';
import { width,elevation10 } from "../../assets/constants/styles";
import { MainStakcProp } from "../../screens";
export const  CardList: FC<MainStakcProp>= ({navigation})=> {     
    return ( 
<View style={containerCardlist as StyleProp<ViewStyle> }>
    <TouchableOpacity
        style={view as  StyleProp<ViewStyle>}
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
        <View style={styles.view}>
          <ImageBackground
            style={styles.bg as  StyleProp<ViewStyle>}
            imageStyle={{borderRadius: 100}}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
           >
            <View style={styles.card as StyleProp<ViewStyle>}>
            
            </View>
          </ImageBackground>
        </View>
        <View style={styles.option }> 
          <Text style={styles.optionText }>CHRONOS LIFE </Text>
       
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={view as  StyleProp<ViewStyle>}
        onPress={() =>
            navigation.navigate('Drawer', {
              screen: 'Brands',
              params: {
                params: {
                  selectedProduct: 'STOMA',
                },
              },
            })
          }>
        <View style={styles.view}>
          <ImageBackground
            style={styles.bg as  StyleProp<ViewStyle>}
            imageStyle={{borderRadius: 100}}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
           >
            <View style={styles.card as StyleProp<ViewStyle>}>
            
            </View>
          </ImageBackground>
        </View>
        <View style={styles.option }> 
          <Text style={styles.optionText }>STOMA - OR</Text>
       
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={view as  StyleProp<ViewStyle>}
        onPress={() =>
            navigation.navigate('Drawer', {
              screen: 'Brands',
              params: {
                params: {
                  selectedProduct: 'GENERA',
                },
              },
            })
          }>
        <View style={styles.view}>
          <ImageBackground
            style={styles.bg as  StyleProp<ViewStyle>}
            imageStyle={{borderRadius: 100}}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
           >
            <View style={styles.card as StyleProp<ViewStyle>}>
            
            </View>
          </ImageBackground>
        </View>
        <View style={styles.option }> 
          <Text style={styles.optionText }>GENERA </Text>
       
        </View>
      </TouchableOpacity>
      
{/*} {logos.map((item, index) => (
         <NavIcon
           item={item}
           key={index}
           function={async () => {
             let datos = {
               product: item.title,
             };
             try {
               // stuff para ponerlo 
               /*await this.props.dispatch(setSelectedProduct(item));
               await storeData(datos, 'product');
               this.props.navRedux.navigate(item.route);
              
             } catch (error) {}
           }}
         /> 
       ))} */}
    
     </View>
     )

}
const styles = StyleSheet.create({
    view: {
        paddingTop: 30,
      width: width / 3.3,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20,
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
    option: {
     
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      flexDirection: 'row',
      //backgroundColor: 'rgba(0,0,0,0.3)',
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius: 20,
      marginTop: 10,
    },
    optionText: {
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold',
      marginRight: 5,
    },
  });
  