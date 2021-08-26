# Torchlight App

## Versioning

### Scheme
* Use an **_ODD_** patch number _(n.n.X+1)_ to indicate a version specifically for iOS
  * The code with this version number will _ONLY_ be used to create and submit a new iOS build
  * In most cases, content changes should be rolled out to both Android _AND_ iOS. If so, they would require an incremented minor number rather than an incremented patch number
* Use an **_EVEN_** patch number _(n.n.X+2)_ to indicate a version specifically for Android
  * The code with this version number will _ONLY_ be used to create and submit a new Android build
  * In most cases, content changes should be rolled out to both Android _AND_ iOS. If so, they would require an incremented minor number rather than an incremented patch number
* Increment to the next minor number _(n.X.0)_ for non breaking features that will be used to create new builds on both Android _and_ iOS
* Always make sure the version number and build number are both updated in app.json

### Synchronizing version numbers with git branches
* Every new version should have a corresponding branch
* Merge each major OR minor version's initial branch (i.e. _2.0.0, 2.1.0, etc_) into branch Main
* Do not merge patch versions into branch Main

## Releases
### 1.0.0
* Initial submission to both iOS and Android stores

### 1.0.1
* This was an aborted patch for iOS; it was created before the official version scheme (above) was adopted and was not used to create a build

### 1.1.0
* Minor changes to iOS build
* Splash screen replaced; original did not meet minimum coverage
* **_NOTE: this version was created before the official version scheme (above) was adopted. It should be the only version that breaks the scheme_**  
  * The next patch for Android should therefore be 1.1.2, rather than 1.0.2
  * The 1.1.2 (Android) release will automatically include the new splash screen, in addition to other changes it introduces for Android

### 1.1.1
* Addresses rejection issues from App Store:
  1. App loaded indefinitely after launch 
      * Device type: iPad
      * OS version: iOS 14.7.1
  1. 5.5-inch iPhone screenshots only display a login screen