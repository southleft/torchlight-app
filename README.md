# Torchlight App

## Versioning

### Scheme
* ~~Use an **_ODD_** patch number _(n.n.X+1)_ to indicate a version specifically for iOS~~
* (Modified 9/21/21) Use an **EVEN major release number _(2.n.n)_** for iOS packages; use an **ODD major release number _(1.n.n)_** for Android packages
  * This new scheme begins with version 2.0.0 for iOS
  * The Android build is the original design and uses the branch "main". The iOS build is now separate and uses the branch "main-iOS"
  * This change was necessitated by the client's request to remove the WebView functionality from the iOS build due to problems getting the app to pass iOS review

### Synchronizing version numbers with git branches
* Every new version should have a corresponding branch
* Merge each major OR minor version's initial branch (i.e. _2.0.0, 2.1.0, etc_) into branch "main" (for Android) and branch "main-iOS" for iOS.
* Update changelog.md to include changelog of each new release
* Update changelog.md in the patch version AND **_commit and merge changelog.md into either "main" or "main-iOS" as needed_**
  * *This should be the ONLY file that gets merged into Main as part of a patch version*
  * *Failing to update changelog.md in Main with every commit will cause a merge conflict; a kitten will die as a result*
* Do not merge files from patch versions (except the CHANGELOG) into branch Main