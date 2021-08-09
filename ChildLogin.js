import React, {useState, useRef} from 'react';
import { WebView } from 'react-native-webview';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AnimatedLoader from './AnimatedLoader';

export default function ChildLogin({ navigation: { navigate }}) {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const webviewRef = useRef(null);

  let backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack()
  };

  let frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward()
  }


  const removeFooter = `
  document.querySelector("div.layoutFooterContainer").setAttribute("hidden", "true");
  true;
  `;
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://child.torchlight.care/' }}
        startInLoadingState={true}
        renderLoading={() => <AnimatedLoader />}
        injectedJavaScript={removeFooter}
        onMessage={(event) => {
          console.log('event: ', event)
        }}
        ref={webviewRef}
        onNavigationStateChange={navState => {
          setCanGoBack(canGoBack)
          setCanGoForward(canGoForward)
          setCurrentUrl(navState.url)
        }}
      />
      <View style={styles.tabBarContainer}>
        <TouchableOpacity onPress={backButtonHandler}>
          <Text style={styles.button}>{`<`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Torchlight')}>
          <Text style={styles.button}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={frontButtonHandler}>
          <Text style={styles.button}>{`>`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBarContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#017092'
  },
  button: {
    color: 'white',
    fontSize: 18
  }
})
