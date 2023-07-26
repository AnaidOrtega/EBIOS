import {FC} from 'react';
import {ImageSourcePropType} from 'react-native';
import {ChronosBrandBg, GeneraBrandBg, StomaBrandBg} from '../assets/img';
import {ChronosLogo, GeneraLogo, StomaLogo} from '../assets';
import {SvgProps} from 'react-native-svg';
import {Cultivo} from '../screens/Cultivo/Cultivo';
import LogoChronos from '../assets/svg/HomeChronos/chronos.svg';
import Poliaminas from '../assets/svg/HomeChronos/polaminaschronos.svg';
import TextChronos from '../assets/svg/HomeChronos/textchronos.svg';
import {width, height, safeAreaTop} from '../styles/globals';
export type BrandNames = 'stoma' | 'chronos' | 'genera';
import Agave from '../assets/svg/CultivosSideBar/Agave.svg';
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
            title: 'Agave',
            icon: Agave,
            component: Cultivo,
          },
          {
            title: 'Agave',
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
    screenLabel: 'Stoma-Or',
    brandIcon: StomaLogo,
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
            title: 'Casos de Éxito',
            icon: Agave,
            component: 'Component Here',
          },
        ],
      },
    ],
  },
} as BrandsScreenDataProps;
