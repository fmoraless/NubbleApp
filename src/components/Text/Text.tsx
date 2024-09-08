import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

interface TextProps extends RNTextProps {
  variant?: TextVariants; //
  bold?: boolean;
  italic?: boolean;
  semibold?: boolean;
}

// font size and lineHeight
export function Text({
  children,
  variant = 'paragraphMedium',
  bold,
  italic,
  semibold,
  style,
  ...rest
}: TextProps) {
  //const style = $fontSizes[variant];

  const fontFamily = getFotFamily(variant, bold, italic, semibold);

  return (
    <RNText style={[$fontSizes[variant], {fontFamily}, style]} {...rest}>
      {children}
    </RNText>
  );
}

function getFotFamily(
  variant: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semibold?: boolean,
) {
  if (
    variant === 'headingLarge' ||
    variant === 'headingMedium' ||
    variant === 'headingSmall'
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

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaptionLarge: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionMedium: {fontSize: 10, lineHeight: 14},
};

const $fontFamily = {
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
