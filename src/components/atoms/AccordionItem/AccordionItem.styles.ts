import {StyleSheet} from 'react-native';
export const accordionStyles = StyleSheet.create({
  container: {width: '100%'},
  navItemStyle: {
    fontSize: 15,
    color: 'white',
    marginLeft: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  navSectionStyle: {
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(68,140,36,0.5)',
    margin: 5,
  },
  icon: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111d2c',
    padding: 10,
  },
  headerIcon: {fontSize: 18, color: '#5aa324'},
  title: {fontWeight: '400', color: '#ffffff', textTransform: 'uppercase'},
  header: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(17,29,44,0.6)',
    marginVertical: 5,
    borderRadius: 10,
  },
});
