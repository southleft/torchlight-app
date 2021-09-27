# Versions
##### See README.md for version scheme rules

## 1.0.0
* Initial submission to both iOS and Android stores

## 1.0.1
* This was an aborted patch for iOS; it was created before the official version scheme (above) was adopted and was not used to create a build

## 1.1.0
* Minor changes to iOS build
* Splash screen replaced; original did not meet minimum coverage
* **_NOTE: this version was created before the official version scheme (see README.md) was adopted. It should be the only version that breaks the scheme_**  
  * The next patch for Android should therefore be 1.1.2, rather than 1.0.2
  * The 1.1.2 (Android) release will automatically include the new splash screen, in addition to other changes it introduces for Android

## 1.1.1
* Addresses rejection issues from App Store:
  1. App loaded indefinitely after launch 
      * Device type: iPad
      * OS version: iOS 14.7.1
  1. 5.5-inch iPhone screenshots only display a login screen

## 2.0.0
* Separate iOS build created
  1. Entirely new codebase created; new repo
  1. Removed WebView component
  1. App now includes home screen only; users will leave the app and continue in browsers after selecting either Child or Elder path
