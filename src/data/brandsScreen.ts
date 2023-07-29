import {FC} from 'react';
import {ImageSourcePropType} from 'react-native';
import {ChronosBrandBg, GeneraBrandBg, StomaBrandBg} from '../assets/img';
import {ChronosLogo, GeneraLogo, StomaLogo} from '../assets';
import {SvgProps} from 'react-native-svg';
import {Cultivo} from '../screens/Cultivo/Cultivo';
import {width, height, safeAreaTop} from '../styles/globals';
import Agave from '../assets/svg/CultivosSideBar/Agave.svg';
import Aguacate from '../assets/svg/CultivosSideBar/Aguacate.svg';
import Ajo from '../assets/svg/CultivosSideBar/Ajo.svg';
import Alfalfa from '../assets/svg/CultivosSideBar/Alfalfa.svg';
import Apio from '../assets/svg/CultivosSideBar/Apio.svg';
import Arroz from '../assets/svg/CultivosSideBar/Arroz.svg';
import Banano from '../assets/svg/CultivosSideBar/Banano.svg';
import Berries from '../assets/svg/CultivosSideBar/Berries.svg';
import Brocoli from '../assets/svg/CultivosSideBar/Brocoli.svg';
import Cafe from '../assets/svg/CultivosSideBar/Cafe.svg';
import Calabaza from '../assets/svg/CultivosSideBar/Calabaza.svg';
import Cana from '../assets/svg/CultivosSideBar/Cana.svg';
import Cebolla from '../assets/svg/CultivosSideBar/Cebolla.svg';
import Chiles from '../assets/svg/CultivosSideBar/Chiles.svg';
import Esparrago from '../assets/svg/CultivosSideBar/Esparrago.svg';
import Fresa from '../assets/svg/CultivosSideBar/Fresa.svg';
import Frijol from '../assets/svg/CultivosSideBar/Frijol.svg';
import Limon from '../assets/svg/CultivosSideBar/Limon.svg';
import Maiz from '../assets/svg/CultivosSideBar/Maiz.svg';
import Mango from '../assets/svg/CultivosSideBar/Mango.svg';
import Manzana from '../assets/svg/CultivosSideBar/Manzana.svg';
import Melon from '../assets/svg/CultivosSideBar/Melon.svg';
import Naranja from '../assets/svg/CultivosSideBar/Naranja.svg';
import Nogal from '../assets/svg/CultivosSideBar/Nogal.svg';
import Ornamentales from '../assets/svg/CultivosSideBar/Ornamentales.svg';
import Papa from '../assets/svg/CultivosSideBar/Papa.svg';
import Papaya from '../assets/svg/CultivosSideBar/Papaya.svg';
import Pepino from '../assets/svg/CultivosSideBar/Pepino.svg';
import Pina from '../assets/svg/CultivosSideBar/PineApple.svg';
import Sandia from '../assets/svg/CultivosSideBar/Sandia.svg';
import Tomate from '../assets/svg/CultivosSideBar/Tomate.svg';
import Trigo from '../assets/svg/CultivosSideBar/Trigo.svg';
import Uva from '../assets/svg/CultivosSideBar/Uva.svg';

import OMRI from '../assets/img/stoma/OMRI.png';
// import OmriLogo from '../assets/svg/HomeStoma/omrilogo.svg';
import LogoStoma from '../assets/img/stoma/stomaLogo.png';
// import LogoStoma from '../assets/svg/HomeStoma/stoma.svg';
import MidStoma from '../assets/img/stoma/ingredientsStoma.png';
// import MidStoma from '../assets/svg/HomeStoma/midstoma.svg';
import PotencialS from '../assets/img/stoma/potencialStoma.png';
//import PotencialS from '../assets/svg/HomeStoma/potencialstoma.svg';
import {CasosDeExito} from '../screens/CasosDeExito/CasosDeExito';

// import LogoChronos from '../assets/svg/HomeChronos/chronos.svg';
import LogoChronos from '../assets/img/chronos/chronos.png';
// import Poliaminas from '../assets/svg/HomeChronos/polaminaschronos.svg';
import Poliaminas from '../assets/img/chronos/chronosPoliaminas.png';
// import TextChronos from '../assets/svg/HomeChronos/textchronos.svg';
import TextChronos from '../assets/img/chronos/textChronos.png';

export type BrandNames = 'stoma' | 'chronos' | 'genera';

const totalH = height - safeAreaTop - 60;
export interface BrandSidebarSections {
  title: string;
  subsections: Array<SideBarSubSectionprops>;
}

export interface SideBarSubSectionprops {
  title: string;
  icon: FC<SvgProps>;
  component: any;
}

export interface BrandProps {
  logosdesc?: {width: string | number; height: string | number};
  logos?: FC<SvgProps>[];
  screenLabel: string;
  brandIcon: FC<SvgProps>;
  imgBackground: ImageSourcePropType;
  sections?: Array<BrandSidebarSections>;
}

export interface BrandsScreenDataProps {
  [key: string]: BrandProps;
}

export const brandScreenData = {
  chronos: {
    imgBackground: ChronosBrandBg,
    screenLabel: 'Chronos Life',
    brandIcon: ChronosLogo,
    logosdesc: {width: width, height: totalH / 3},
    logos: [LogoChronos, Poliaminas, TextChronos],
    sections: [
      {
        title: 'cultivos',
        subsections: [
          {
            title: 'Casos de éxito',
            icon: Agave,
            component: CasosDeExito,
          },

          {
            title: 'Agave',
            icon: Agave,
            component: Cultivo,
          },
          {
            title: 'Aguacate',
            icon: Aguacate,
            component: Cultivo,
          },
          {
            title: 'Ajo',
            icon: Ajo,
            component: Cultivo,
          },
          {
            title: 'Alfalfa',
            icon: Alfalfa,
            component: Cultivo,
          },
          {
            title: 'Apio, Espinaca, Lechuga',
            icon: Apio,
            component: Cultivo,
          },
          {
            title: 'Arroz',
            icon: Arroz,
            component: Cultivo,
          },
          {
            title: 'Banano',
            icon: Banano,
            component: Cultivo,
          },
          {
            title: 'Berries',
            icon: Berries,
            component: Cultivo,
          },
          {
            title: 'Brócoli',
            icon: Brocoli,
            component: Cultivo,
          },
          {
            title: 'Café',
            icon: Cafe,
            component: Cultivo,
          },
          {
            title: 'Calabaza',
            icon: Calabaza,
            component: Cultivo,
          },
          {
            title: 'Caña',
            icon: Cana,
            component: Cultivo,
          },
          {
            title: 'Cebolla',
            icon: Cebolla,
            component: Cultivo,
          },
          {
            title: 'Chiles',
            icon: Chiles,
            component: Cultivo,
          },
          {
            title: 'Espárrago',
            icon: Esparrago,
            component: Cultivo,
          },
          {
            title: 'Fresa',
            icon: Fresa,
            component: Cultivo,
          },
          {
            title: 'Frijol, Soya y Garbanzo',
            icon: Frijol,
            component: Cultivo,
          },
          {
            title: 'Limón',
            icon: Limon,
            component: Cultivo,
          },
          {
            title: 'Maíz',
            icon: Maiz,
            component: Cultivo,
          },
          {
            title: 'Mango',
            icon: Mango,
            component: Cultivo,
          },
          {
            title: 'Manzana',
            icon: Manzana,
            component: Cultivo,
          },
          {
            title: 'Melon',
            icon: Melon,
            component: Cultivo,
          },
          {
            title: 'Naranja',
            icon: Naranja,
            component: Cultivo,
          },
          {
            title: 'Nogal',
            icon: Nogal,
            component: Cultivo,
          },
          {
            title: 'Ornamentales',
            icon: Ornamentales,
            component: Cultivo,
          },
          {
            title: 'Papa',
            icon: Papa,
            component: Cultivo,
          },
          {
            title: 'Papaya',
            icon: Papaya,
            component: Cultivo,
          },
          {
            title: 'Pepino',
            icon: Pepino,
            component: Cultivo,
          },
          {
            title: 'Piña',
            icon: Pina,
            component: Cultivo,
          },
          {
            title: 'Sandía',
            icon: Sandia,
            component: Cultivo,
          },
          {
            title: 'Tomate',
            icon: Tomate,
            component: Cultivo,
          },
          {
            title: 'Trigo',
            icon: Trigo,
            component: Cultivo,
          },
          {
            title: 'Uva',
            icon: Uva,
            component: Cultivo,
          },
          {
            title: 'Zanahoria',
            icon: Agave,
            component: Cultivo,
          },
        ],
      },
      {
        title: 'Campos de Golf',
        subsections: [
          {
            title: 'Campos de Golf',
            icon: Agave,
            component: Cultivo,
          },
        ],
      },
      {
        title: 'Áreas Deportivas',
        subsections: [
          {
            title: 'Areas Deportivas',
            icon: Agave,
            component: Cultivo,
          },
        ],
      },
      {
        title: 'Viveros',
        subsections: [
          {
            title: 'Viveros',
            icon: Agave,
            component: Cultivo,
          },
        ],
      },
    ],
  },
  stoma: {
    imgBackground: StomaBrandBg,
    logosdesc: {width: width, height: totalH / 3},
    logos: [OMRI, LogoStoma, MidStoma, PotencialS],
    screenLabel: 'Stoma-Or',
    brandIcon: StomaLogo,
    sections: [
      {
        title: 'cultivos',
        subsections: [
          {
            title: 'Casos de éxito',
            icon: Agave,
            component: CasosDeExito,
          },
        ],
      },
    ],
  },
  genera: {
    imgBackground: GeneraBrandBg,
    screenLabel: 'Genera',
    brandIcon: GeneraLogo,
    sections: [
      {
        title: 'cultivos',
        subsections: [
          {
            title: 'Casos de éxito',
            icon: Agave,
            component: CasosDeExito,
          },
        ],
      },
    ],
  },
} as BrandsScreenDataProps;
