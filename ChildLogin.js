import React from 'react';
import { WebView } from 'react-native-webview';
import AnimatedLoader from './AnimatedLoader';

export default function ChildLogin() {
  return (
    <WebView
      source={{ uri: 'https://child.torchlight.care/' }}
      startInLoadingState={true}
      renderLoading={() => <AnimatedLoader />}
    />
  );
}
