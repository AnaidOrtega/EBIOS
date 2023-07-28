import {width} from '../../styles/globals';

export const socials = [
  {
    title: 'Visita www.epsilonbios.com!',
    Icon: '',
    url: 'https://epsilonbios.com',
  },
  {
    title: 'Envíanos un Whatsapp!',
    Icon: 'Whatsapp',
    url: 'whatsapp://send?text= Hola, tengo una duda! &phone=5213318659920',
  },
  {
    title: 'Envíanos un correo!',
    Icon: 'Mail',
    url: 'mailto:Alopez@epsilonbios.com?&subject=Contacto&body=Hola, tengo una duda!',
  },
  {
    title: 'Visita nuestra página de Facebook!',
    Icon: 'Facebook',
    url: 'https://www.facebook.com/EpsilonBios',
  },
  {
    title: 'Visita nuestra página de Instagram!',
    Icon: 'Instagram',
    url: 'https://instagram.com/epsilonbios?igshid=im2vgkdiytwc',
  },
  {
    title: 'Visita nuestro canal de Youtube!',
    Icon: 'Youtube',
    url: 'https://www.youtube.com/channel/UCqBEeZ-aZy2ksunc0BlJXfQ',
  },
];

export const logos = [
  {
    title: 'CHRONOS LIFE',
    Icon: 'ChronosIcon',
    route: 'DrawerChronos',
    size: {width: width / 2.5, height: width / 2.5},
  },
  {
    title: 'STOMA - OR',
    Icon: 'StomaIcon',
    route: 'DrawerStoma',
    size: {width: width / 2.5, height: width / 2.5},
  },
  {
    title: 'GENERA',
    Icon: 'Genera',
    route: 'DrawerGenera',
    size: {width: width / 2.5, height: width / 2.5},
  },
];
