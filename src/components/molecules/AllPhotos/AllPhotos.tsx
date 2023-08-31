// Importa las bibliotecas necesarias
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface Data {
  container: string;
  name: string;
  size: number;
  atime: string;
  mtime: string;
  ctime: string;
}
import UserBlack from '../../../assets/svg/Design/userblack.svg';
import Epsilon from '../../../assets/svg/Logos/epsilon.svg';
export const AllPhotos: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  const TitleHandler = (title: String) => {
    let string = title.split('&&');
    return string[1];
  };

  useEffect(() => {
    // Realiza la solicitud al API
    fetch('http://161.35.105.244/api/archivos/imagenes/files')
      .then(response => response.json())
      .then((responseData: Data[]) => {
        setData(responseData); // Actualiza el estado con los datos recibidos
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {data.map(item => (
        <View key={item.name} style={styles2.cardContainer}>
          <View style={styles2.cardHeader}>
            <UserBlack style={styles2.avatarImage} />
            <View style={styles2.textV}>
              <Text style={{fontWeight: '600', color: 'black'}}>
                Comunidad{' '}
              </Text>
              <Text style={styles2.middleText}>Epsilon </Text>
              <Text style={styles2.rightText}>Bios</Text>
            </View>
          </View>
          <View style={styles2.name}>
            <Text style={styles2.cardTitle}> @{TitleHandler(item.name)}</Text>
          </View>

          <Image
            source={{uri: 'http://161.35.105.244/imagenes/' + item.name}}
            style={{width: '100%', height: 400}}
          />
          <View style={styles2.cardFooter}>
            <Epsilon width={50} height={50} />
          </View>
        </View>
      ))}
    </View>
  );
};
const styles2 = StyleSheet.create({
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textV: {
    flexDirection: 'row',
    flex: 2,
  },
  middleText: {fontSize: 15, fontWeight: 'bold', color: 'black'},
  rightText: {fontSize: 15, fontWeight: 'bold', color: '#89D00B'},
  iconV: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
    width: '95%',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatarImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardFooter: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },
  cardDescription: {
    marginTop: 5,
    color: '#555',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
});

{
  /*<View>
          <Text key={item.name} style={styles.item}>
            {item.name}
          </Text>
          <Image
            source={{uri: 'http://161.35.105.244/imagenes/' + item.name}}
            style={{width: '100%', height: 400}}></Image>
      </View> */
}
