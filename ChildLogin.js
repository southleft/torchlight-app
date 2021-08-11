import React, {useState, useRef} from 'react';
import { WebView } from 'react-native-webview';
import { View, TouchableWithoutFeedback, StyleSheet, Platform } from 'react-native';
import AnimatedLoader from './AnimatedLoader';
import { FontAwesome } from '@expo/vector-icons';

export default function ChildLogin({ navigation: { navigate }}) {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const webviewRef = useRef(null);
  
  let backButtonHandler = () => {
    if (webviewRef.current) {
      webviewRef.current.goBack();
      setCanGoForward(true);
    }
  };

  let frontButtonHandler = () => {
    if (webviewRef.current) {
      webviewRef.current.goForward()
    }
  }

  const removeFooter = `
  document.querySelector("div.layoutFooterContainer").setAttribute("hidden", "true");
  true;
  `;

return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://child.torchlight.care/login' }}
        startInLoadingState={true}
        renderLoading={() => <AnimatedLoader />}
        injectedJavaScript={removeFooter}
        onMessage={(event) => {
          console.log('event: ', event)
        }}
        ref={webviewRef}
        onNavigationStateChange={navState => {
          setCanGoBack(currentUrl !== 'https://child.torchlight.care/login')
          setCurrentUrl(navState.url)
        }}
    />
      <View style={styles.tabBarContainer}>
        <TouchableWithoutFeedback onPress={backButtonHandler}>
          <FontAwesome name="chevron-left" style={styles.navButton} color={canGoBack ? 'white' : '#bbbbbb80'}/>
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback onPress={frontButtonHandler}>
        <FontAwesome name="chevron-right" style={styles.navButton} color={canGoForward ? 'white' : '#bbbbbb80'}/>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 24 : 0
  },
  tabBarContainer: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#017092'
  },
  navButton: {
    fontSize: 32
  }
})
