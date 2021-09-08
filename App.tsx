import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import splash from './assets/images/splash.png';
import {
  DMSansBold,
  DMSansBoldItalic,
  DMSansItalic,
  DMSansMedium,
  DMSansMediumItalic,
  DMSansRegular,
  FKScreamerBackslanted,
  FKScreamerSlanted,
  FKScreamerUpright,
} from './src/constants/font';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { getStore } from './src/state/store';

const { store, persistor } = getStore();

const { width, height } = Dimensions.get('window');

export default function App() {
  // Load fonts
  const [isFontsLoaded] = useFonts({
    [DMSansBold]: require('./assets/fonts/DMSans-Bold.ttf'),
    [DMSansBoldItalic]: require('./assets/fonts/DMSans-BoldItalic.ttf'),
    [DMSansItalic]: require('./assets/fonts/DMSans-Italic.ttf'),
    [DMSansMedium]: require('./assets/fonts/DMSans-Medium.ttf'),
    [DMSansMediumItalic]: require('./assets/fonts/DMSans-MediumItalic.ttf'),
    [DMSansRegular]: require('./assets/fonts/DMSans-Regular.ttf'),
    [FKScreamerBackslanted]: require('./assets/fonts/FKScreamer-Backslanted.ttf'),
    [FKScreamerSlanted]: require('./assets/fonts/FKScreamer-Slanted.ttf'),
    [FKScreamerUpright]: require('./assets/fonts/FKScreamer-Upright.ttf'),
  });

  // Load assets
  // const [isAssetsLoaded] = useAssets([
  //   require('./assets/images/bg-1.png'),
  //   require('./assets/images/logo-dark.png'),
  //   require('./assets/images/logo-light.png'),
  // ]);

  if (!isFontsLoaded)
    return (
      <>
        <ImageBackground
          source={splash}
          imageStyle={{ width, height }}
          style={{ width, height }}>
          <ActivityIndicator
            size="large"
            color="white"
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height: height / 2,
              display: 'flex',
            }}
          />
        </ImageBackground>
        <AppLoading />
      </>
    );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="light" />
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
