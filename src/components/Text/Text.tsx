import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

interface TextProps extends RNTextProps {
  variant?: TextVariants; //
}

// font size and lineHeight
export function Text({
  children,
  variant = 'paragraphMedium',
  ...rest
}: TextProps) {
  const style = $fontSizes[variant];

  return (
    <RNText style={style} {...rest}>
      {children}
    </RNText>
  );
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
