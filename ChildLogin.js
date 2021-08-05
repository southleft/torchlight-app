import React from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import AnimatedLoader from './AnimatedLoader';

export default function ChildLogin() {
  const removeFooter = `
  document.querySelector("div.layoutFooterContainer").setAttribute("hidden", "true");
  true;
  `;
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://child.torchlight.care/' }}
        startInLoadingState={true}
        renderLoading={() => <AnimatedLoader />}
        injectedJavaScript={removeFooter}
        onMessage={(event) => {
          console.log('event: ', event)
        }}
      />
    </View>
  );
}
