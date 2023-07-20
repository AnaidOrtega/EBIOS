import {ReactNode} from 'react';
import {ImageSourcePropType} from 'react-native';
import {ChronosBrandBg, GeneraBrandBg, StomaBrandBg} from '../assets/img';

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
  imgBackground: ImageSourcePropType;
  logos?: ReactNode[];
  screenLabel: string;
  sections?: Array<BrandSidebarSections>;
}

export interface BrandsScreenDataProps {
  [key: string]: BrandProps;
}

export const brandScreenData = {
  genera: {
    imgBackground: GeneraBrandBg,
    screenLabel: 'Genera',
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
  },
  chronos: {
    imgBackground: ChronosBrandBg,
    screenLabel: 'Chronos Life',
  },
} as BrandsScreenDataProps;
