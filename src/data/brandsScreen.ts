import {FC, ReactNode} from 'react';
import {ImageSourcePropType} from 'react-native';
import {ChronosBrandBg, GeneraBrandBg, StomaBrandBg} from '../assets/img';
import {ChronosLogo, GeneraLogo, StomaLogo} from '../assets';
import {SvgProps} from 'react-native-svg';

export type BrandNames = 'stoma' | 'chronos' | 'genera';

export interface BrandSidebarSections {
  title: string;
  subsections: Array<SideBarSubSectionprops>;
}

export interface SideBarSubSectionprops {
  title: string;
  icon: ReactNode;
  component: ReactNode;
}

export interface BrandProps {
  logos?: ReactNode[];
  screenLabel: string;
  brandIcon: FC<SvgProps>;
  imgBackground: ImageSourcePropType;
  sections?: Array<BrandSidebarSections>;
}

export interface BrandsScreenDataProps {
  [key: string]: BrandProps;
}

export const brandScreenData = {
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
            icon: 'Icon Here',
            component: 'Component Here',
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
  chronos: {
    imgBackground: ChronosBrandBg,
    screenLabel: 'Chronos Life',
    brandIcon: ChronosLogo,
  },
} as BrandsScreenDataProps;
