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
  NunitoSansBlack,
  NunitoSansBlackItalic,
  NunitoSansBold,
  NunitoSansBoldItalic,
  NunitoSansExtraBold,
  NunitoSansExtraBoldItalic,
  NunitoSansExtraLight,
  NunitoSansExtraLightItalic,
  NunitoSansLight,
  NunitoSansLightItalic,
  NunitoSansRegular,
  NunitoSansSemiBold,
  NunitoSansSemiBoldItalic,
  NunitoSansItalic,
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
    [NunitoSansBlack]: require('./assets/fonts/Nunito-Black.ttf'),
    [NunitoSansBlackItalic]: require('./assets/fonts/Nunito-BlackItalic.ttf'),
    [NunitoSansBold]: require('./assets/fonts/Nunito-Bold.ttf'),
    [NunitoSansBoldItalic]: require('./assets/fonts/Nunito-BoldItalic.ttf'),
    [NunitoSansExtraBold]: require('./assets/fonts/Nunito-ExtraBold.ttf'),
    [NunitoSansExtraBoldItalic]: require('./assets/fonts/Nunito-ExtraBoldItalic.ttf'),
    [NunitoSansExtraLight]: require('./assets/fonts/Nunito-ExtraLight.ttf'),
    [NunitoSansExtraLightItalic]: require('./assets/fonts/Nunito-ExtraLightItalic.ttf'),
    [NunitoSansItalic]: require('./assets/fonts/Nunito-Italic.ttf'),
    [NunitoSansLight]: require('./assets/fonts/Nunito-Light.ttf'),
    [NunitoSansLightItalic]: require('./assets/fonts/Nunito-LightItalic.ttf'),
    [NunitoSansRegular]: require('./assets/fonts/Nunito-Regular.ttf'),
    [NunitoSansSemiBold]: require('./assets/fonts/Nunito-SemiBold.ttf'),
    [NunitoSansSemiBoldItalic]: require('./assets/fonts/Nunito-SemiBoldItalic.ttf'),
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
