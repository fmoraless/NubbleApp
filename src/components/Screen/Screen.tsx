import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {Box, TouchableOpacityBox, Icon, Text} from '@components';
import {useAppTheme, useAppSafeArea} from '@hooks';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps {
  children?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const navigation = useNavigation();

  /*   console.log({
    device: Platform.OS,
    top: top,
    bottom: bottom,
  }); */

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              mb="s24"
              flexDirection="row">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semibold ml="s8">
                Volver
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
