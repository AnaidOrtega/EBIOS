import {AmigosLogo, CotizacionLogo} from '../assets';
import {ListItems} from '../components';

export const communityScreen = [
  {
    label: 'Cotización',
    icon: CotizacionLogo,
    screen: 'cotizacion',
  },
  {
    label: 'Amigos de los amaneceres',
    icon: AmigosLogo,
    screen: 'amigos',
  },
] as ListItems[];
