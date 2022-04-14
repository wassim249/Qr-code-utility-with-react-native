import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Appearance} from 'react-native';
import GenerateQrCode from './src/screens/GenerateQrCode';
import ScanQrCode from './src/screens/ScanQrCode';

const App = () => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  const [scanQr, setScanQr] = useState(false);
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {scanQr ? (
        <ScanQrCode setScanQr={setScanQr} />
      ) : (
        <GenerateQrCode scanQr={scanQr} setScanQr={setScanQr} />
      )}
    </SafeAreaView>
  );
};

export default App;
