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
* Update changelog.md to include changelog of each new release
* Update changelog.md in the patch version AND **_commit and merge changelog.md into branch Main also_**
  * *This should be the ONLY file that gets merged into Main as part of a patch version*
  * *Failing to update changelog.md in Main with every commit will cause a merge conflict; a kitten will die as a result*
* Do not merge files from patch versions (except the CHANGELOG) into branch Main