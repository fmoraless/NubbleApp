import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

import {Box, BoxProps} from '@components';
import {useAppTheme, useAppSafeArea} from '@hooks';

import {ScreenHeader} from './components';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

export interface ScreenProps extends BoxProps {
  children?: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
  noPaddingHorizontal?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  title,
  noPaddingHorizontal = false,
  HeaderComponent,
  style,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal={noPaddingHorizontal ? undefined : 's24'}
          style={[
            {
              paddingTop: top,
              paddingBottom: bottom,
            },
            style,
          ]}
          {...boxProps}>
          <ScreenHeader
            HeaderComponent={HeaderComponent}
            title={title}
            canGoBack={canGoBack}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
