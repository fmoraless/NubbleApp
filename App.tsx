if (__DEV__) {
  require('./ReactotronConfig');
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {useAppColorScheme} from '@hooks';

import {Router} from './src/routes/Routes';
import {AuthCredentialsProvider} from './src/services/authCredentials/Providers/AuthCredentialsProvider';
import {settingsService} from './src/services/settings/settingsService';
import {useAppColor} from './src/services/settings/useSettings';
import {initializeStorage, MMKVStorage} from './src/services/storage';
import {darkTheme, theme} from './src/theme/theme';

const queryClient = new QueryClient();

initializeStorage(MMKVStorage);

function App(): React.JSX.Element {
  useAppColorScheme();
  const appColor = useAppColor();

  useEffect(() => {
    settingsService.handleStatusBar(appColor);
  }, [appColor]);

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColor === 'dark' ? darkTheme : theme}>
            {/* <ToastProvider> */}
            <Router />
            <Toast />
            {/* </ToastProvider> */}
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
