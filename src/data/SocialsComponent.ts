import {FC, ReactNode} from 'react';
import {SvgProps} from 'react-native-svg';
import {facebook, insta, mail, web, whatsapp, youtube} from '../assets/';
import {ListSocialsItems} from '../components';

export const ListSocialData = [
  {
    title: 'Visita www.epsilonbios.com!',
    Icon: web,
    url: 'https://epsilonbios.com',
  },
  {
    title: 'Envíanos un Whatsapp!',
    Icon: whatsapp,
    url: 'whatsapp://send?text= Hola, tengo una duda! &phone=5213318659920',
  },
  {
    title: 'Envíanos un correo!',
    Icon: mail,
    url: 'mailto:Alopez@epsilonbios.com?&subject=Contacto&body=Hola, tengo una duda!',
  },

  {
    title: 'Visita nuestra página de Facebook!',
    Icon: facebook,
    url: 'https://www.facebook.com/EpsilonBios',
  },
  {
    title: 'Visita nuestra página de Instagram!',
    Icon: insta,
    url: 'https://instagram.com/epsilonbios?igshid=im2vgkdiytwc',
  },
  {
    title: 'Visita nuestro canal de Youtube!',
    Icon: youtube,
    url: 'https://www.youtube.com/channel/UCqBEeZ-aZy2ksunc0BlJXfQ',
  },
] as ListSocialsItems[];
