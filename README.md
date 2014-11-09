How to build:
=========
install leiningen

install phonegap

    lein cljsbuild once
    
####Testing:
    phonegap run android --emulator
####Building apk: 
    phonegap local build android
