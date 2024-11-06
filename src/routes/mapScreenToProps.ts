import {IconProps} from '@components';
import {AppTabBottomTabParamList} from '@routes';

export const mapScreenProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Inicio',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Nuevo Post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favorito',
    icon: {
      focused: 'bookMarkFill',
      unfocused: 'bookMark',
    },
  },
  MyProfileScreen: {
    label: 'Mi perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
