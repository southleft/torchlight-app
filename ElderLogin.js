import React from 'react';
import { WebView } from 'react-native-webview';
import AnimatedLoader from './AnimatedLoader';

export default function ElderLogin() {
  return (
    <WebView
      source={{ uri: 'https://elder.torchlight.care/' }}
      startInLoadingState={true}
      renderLoading={() => <AnimatedLoader />}
    />
  );
}
