import {ImageProps} from 'react-native';

import {images} from '@assets';

export type OnboardingPageItem = {
  title: Array<{text: string; highlight?: boolean}>;
  subtitle: string;
  image: {
    light: ImageProps['source'];
    dark: ImageProps['source'];
  };
  index: number;
  total: number;
  isLast: boolean;
};

type OnboardingPageItemWithoutMeta = Omit<
  OnboardingPageItem,
  'index' | 'total' | 'isLast'
>;

const page1: OnboardingPageItemWithoutMeta = {
  // title: 'Una red social para compartir tus historias',
  title: [
    {text: 'Una red social de ', highlight: false},
    {text: 'conexiones reales', highlight: true},
  ],
  subtitle: 'Conecta con tus amigos y familiares',
  image: {
    light: images.onbardingLight1,
    dark: images.onbardingDark1,
  },
};

const page2: OnboardingPageItemWithoutMeta = {
  //title: 'Comparta sus historias con sus amigos mas cercanos',
  title: [
    {text: 'Comparta sus ', highlight: false},
    {text: 'historias ', highlight: true},
    {text: 'con sus amigos cercanos', highlight: false},
  ],
  subtitle: 'tenga su linea de tiempo personalizada',
  image: {
    light: images.onbardingLight2,
    dark: images.onbardingDark2,
  },
};

const page3: OnboardingPageItemWithoutMeta = {
  //title: 'Ineteractua en tiempo real con tus amigos',
  title: [
    {text: 'Interactúa', highlight: true},
    {text: ' comenta los contenidos que mas te gusten', highlight: false},
  ],
  subtitle: 'Comparte tus historias y fotos en tiempo real',
  image: {
    light: images.onbardingLight3,
    dark: images.onbardingDark3,
  },
};

export const onboardingPages: OnboardingPageItem[] = [page1, page2, page3].map(
  (page, index, array) => ({
    ...page,
    index,
    total: array.length,
    isLast: index + 1 === array.length,
  }),
);
