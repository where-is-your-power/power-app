How to build:
=========
install leiningen

install phonegap

    lein cljsbuild once
    
####Testing:
optional: ```/usr/local/opt/android-sdk/bin/android create avd --name emulator --target 1 --abi default/x86```
    
    phonegap run android --emulator
####Building apk: 
    phonegap local build android
