import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Text} from 'react-native-paper';
import tailwind from 'twrnc';
import ResultDialog from '../components/ResultDialog';

const ScanQrCode = ({setScanQr}) => {
  const [showResult, setShowResult] = useState(false);
  const [scannedValue, setScannedValue] = useState('');
  return (
    <View style={tailwind`h-full w-full`}>
      {showResult ? (
        <ResultDialog
          visible={true}
          setVisible={setShowResult}
          scannedValue={scannedValue}
        />
      ) : (
        <QRCodeScanner
          topContent={
            <Text style={tailwind`text-center text-white text-2xl`}>
              Scan QR Code
            </Text>
          }
          bottomContent={
            <TouchableOpacity
              onPress={() => {
                setScanQr(false);
              }}>
              <Text style={tailwind`text-center text-white text-2xl`}>
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
