import React, {useState} from 'react';
import {Appearance, View, ScrollView, Alert} from 'react-native';

import {Button, IconButton, Text, TextInput} from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import tailwind from 'twrnc';

const GenerateQrCode = ({setScanQr}) => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  const [qrCode, setQrCode] = useState('');
  const [showqr, setShowqr] = useState(false);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={tailwind`${
        isDarkMode ? 'bg-slate-900 ' : 'bg-blue-50'
      } h-full p-4`}>
      <View style={tailwind`flex flex-row w-full items-center justify-between`}>
        <Text
          style={tailwind` ${
            isDarkMode ? 'text-blue-100' : 'text-blue-800'
          } text-2xl font-extrabold`}>
          {'Generate QR Code\neasily'}
        </Text>
        <IconButton
          icon="qrcode-scan"
          style={tailwind`
          ${isDarkMode ? 'bg-blue-700' : 'bg-blue-100'}
         `}
          color={isDarkMode ? '#fff' : '#3B82F6'}
          size={30}
          onPress={() => {
            setScanQr(true);
          }}
        />
      </View>

      <View
        style={tailwind`w-full p-4 mt-6 ${
          isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
        } rounded-lg`}>
        <TextInput
          style={tailwind`rounded-lg`}
          placeholder="Enter the value"
          value={qrCode}
          onChangeText={text => setQrCode(text)}
          underlineColor="transparent"
          activeOutlineColor="transparent"
          outlineColor="transparent"
          numberOfLines={4}
          mutliline={true}
        />
        <Button
          icon="qrcode"
          mode="contained"
          style={tailwind`${
            isDarkMode ? 'bg-blue-700' : 'bg-blue-500'
          } py-4 mt-4 shadow-lg text-white`}
          onPress={() => {
            if (qrCode.length > 0) setShowqr(true);
            else {
              Alert.alert('Error', 'Please enter a value', [{text: 'OK' }]);
            }
          }}>
          Generate QR Code
        </Button>
      </View>

      <View
        style={tailwind`mt-4 flex flex-row justify-center items-center h-100 ${
          isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
        } rounded-lg`}>
        {showqr ? (
          <QRCode size={300} value={qrCode} />
        ) : (
          <Text
            style={tailwind`${
              isDarkMode ? 'text-white' : 'text-blue-800'
            } text-center text-lg font-bold`}>
            Your qr code is shown here
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default GenerateQrCode;
