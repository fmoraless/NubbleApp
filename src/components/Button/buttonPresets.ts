import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {TextProps} from '../Text/Text';

import {ButtonPreset} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: {color: ThemeColors; textProps?: TextProps};
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: {color: 'primaryContrast'},
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {color: 'gray2'},
    },
  },
  outline: {
    default: {
      container: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: {color: 'primary'},
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {color: 'gray2'},
    },
  },
  secondary: {
    default: {
      container: {
        backgroundColor: 'carrotSecondary',
      },
      content: {color: 'primaryContrast'},
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {color: 'gray2'},
    },
  },
  disabled: {
    default: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {color: 'gray2'},
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {color: 'gray2'},
    },
  },
  ghost: {
    default: {
      container: {
        backgroundColor: 'white70',
        height: 40,
      },
      content: {
        color: 'grayBlack',
        textProps: {
          preset: 'paragraphSmall',
          bold: false,
        },
      },
    },
    disabled: {
      container: {
        backgroundColor: 'grayWhite',
        height: 40,
      },
      content: {color: 'grayBlack'},
    },
  },
};
