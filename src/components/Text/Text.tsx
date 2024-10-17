import React from 'react';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Text as RNText,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

import {createText} from '@shopify/restyle';

import {Theme} from '../../theme/theme';

const SRText = createText<Theme>();

type SRTextProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semibold?: boolean;
}

// font size and lineHeight
export function Text({
  children,
  preset = 'paragraphMedium',
  bold,
  italic,
  semibold,
  style,
  ...sRTextProps
}: TextProps) {
  //const style = $fontSizes[preset];

  const fontFamily = getFotFamily(preset, bold, italic, semibold);

  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...sRTextProps}>
      {children}
    </SRText>
  );
}

function getFotFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semibold?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }
  if (bold && italic) {
    return $fontFamily.boldItalic;
  }
  if (bold) {
    return $fontFamily.bold;
  }
  if (italic) {
    return $fontFamily.italic;
  }

  if (semibold && italic) {
    return $fontFamily.mediumItalic;
  }

  if (semibold) {
    return $fontFamily.medium;
  }
  return $fontFamily.regular;
}

//Define the type of text variants
type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaptionLarge'
  | 'paragraphCaptionMedium';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaptionLarge: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionMedium: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};
