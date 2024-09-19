import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import React, {useRef} from 'react';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';

interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
}
export function TextInput({
  label,
  errorMessage,
  RightComponent,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    flexDirection: 'row',
    borderColor: errorMessage ? 'error' : 'gray4',
    padding: 's16',

    borderRadius: 's12',
  };

  function focusInput() {
    inputRef.current?.focus();
  }
  return (
    <Pressable onPress={focusInput}>
      <Box>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {RightComponent && <Box ml="s16">{RightComponent}</Box>}
        </Box>
        <Text color="error" preset="paragraphSmall" bold>
          {errorMessage}
        </Text>
      </Box>
    </Pressable>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
