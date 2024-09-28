/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {TextInput} from './src/components/TextInput/TextInput';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {EyeOnIcon} from './src/assets/icons/EyeOnIcon';
import {Icon} from './src/components/Icon/Icon';
import {LoginScreen} from './src/screens/auth/Login/LoginScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SignUpScreen} from './src/screens/auth/SignUp/SignUpScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <SignUpScreen /> */}
        <Box flexDirection="row">
          <Icon name="arrowLeft" size={30} color="buttonPrimary" />
          <Icon name="arrowRight" size={30} />
          <Icon name="check" size={30} />
          <Icon name="chevronRight" size={30} />
          <Icon name="flashOff" size={30} />
          <Icon name="flashOn" size={30} />
          <Icon name="heart" size={30} />
          <Icon name="heartFill" size={30} />
          <Icon name="home" size={30} />
          <Icon name="homeFill" size={30} />
        </Box>

        <Box flexDirection="row">
          <Icon name="bellOn" size={30} />
          <Icon name="bell" size={30} />
          <Icon name="bookMark" size={30} />
          <Icon name="bookMarkFill" size={30} />
          <Icon name="camera" size={30} />
          <Icon name="chat" size={30} />
          <Icon name="chatOn" size={30} />
          <Icon name="message" size={30} />
          <Icon name="comment" size={30} />
          <Icon name="more" size={30} />
        </Box>

        <Box flexDirection="row">
          <Icon name="newPost" size={30} />
          <Icon name="profile" size={30} />
          <Icon name="profileFill" size={30} />
          <Icon name="search" size={30} />
          <Icon name="send" size={30} />
          <Icon name="settings" size={30} />
          <Icon name="trash" size={30} />
        </Box>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
