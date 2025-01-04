import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenProps} from '../Screen';

type Props = Pick<ScreenProps, 'title' | 'canGoBack' | 'HeaderComponent'>;

const ICON_SIZE = 20;
export function ScreenHeader({title, canGoBack, HeaderComponent}: Props) {
  const navigation = useNavigation();

  const showBackLabel = !title && !HeaderComponent;

  return (
    <Box
      mb="s24"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          mr="s10"
          onPress={navigation.goBack}>
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" semibold ml="s8">
              Volver
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box backgroundColor="carrotSecondary" width={ICON_SIZE} />}
    </Box>
  );
}
