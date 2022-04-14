import React, {useState} from 'react';
import {View, TouchableOpacity, Appearance} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Text} from 'react-native-paper';
import tailwind from 'twrnc';
import ResultDialog from '../components/ResultDialog';

const ScanQrCode = ({setScanQr}) => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const [showResult, setShowResult] = useState(false);
  const [scannedValue, setScannedValue] = useState('');
  return (
    <View
      style={tailwind`h-full w-full ${
        isDarkMode ? 'bg-slate-900' : 'bg-blue-50'
      }`}>
      {showResult ? (
        <ResultDialog
          visible={true}
          setVisible={setShowResult}
          scannedValue={scannedValue}
        />
      ) : (
        <QRCodeScanner
          topContent={
            <Text
              style={tailwind`text-white
               font-bold text-2xl ${
                 isDarkMode ? 'bg-blue-700' : ' bg-blue-500'
               } w-full text-center py-4`}>
              Scan QR Code
            </Text>
          }
          bottomContent={
            <TouchableOpacity
              onPress={() => {
                setScanQr(false);
              }}>
              <Text
                style={tailwind`text-blue-500 bg-blue-100 rounded-200 py-2 px-6 font-bold text-2xl`}>
                Cancel
              </Text>
            </TouchableOpacity>
          }
          onRead={e => {
            setScannedValue(e.data);
            setShowResult(true);
            console.log(e.data);
          }}
        />
      )}
    </View>
  );
};

export default ScanQrCode;
