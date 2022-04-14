import React, {useState} from 'react';
import {
Appearance,
  View,
  ScrollView,

} from 'react-native';


import {Button, IconButton, Text, TextInput } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import tailwind from 'twrnc';
import ResultDialog from '../components/ResultDialog';

const GenerateQrCode = ({setScanQr , scanQr}) => {
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    const [qrCode, setQrCode] = useState('');
    const [showqr, setShowqr] = useState(false);

  return (
    <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={tailwind`${
            isDarkMode ? 'bg-slate-900 ' : 'bg-blue-50'
          } h-full p-4`}>
          <View>
            <Text
              style={tailwind` ${
                isDarkMode ? 'text-blue-100' : 'text-blue-800'
              } text-3xl font-extrabold`}>
              Generate QR Code easily
            </Text>
            <IconButton
              icon="printer"
              color={isDarkMode ? '#fff' : 'grey'}
              size={50}
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
              style={tailwind`${isDarkMode && 'bg-blue-800 '}  rounded-lg`}
              placeholder="Enter the value"
              value={qrCode}
              onChangeText={text => setQrCode(text)}
              underlineColor="transparent"
              activeOutlineColor="transparent"
              outlineColor="transparent"
              numberOfLines={4}
              mutliline={true}
              theme={{
                colors: {primary: '#fff', text: isDarkMode ? '#fff' : '#000'},
              }}
            />
            <Button
              icon="qrcode"
              mode="contained"
              style={tailwind`${
                isDarkMode ? 'bg-blue-700' : 'bg-blue-500'
              } py-4 mt-4 shadow-lg text-white`}
              onPress={() => {
                if (qrCode.length > 0) setShowqr(true);
              }}>
              Generate QR Code
            </Button>
          </View>
          {showqr && (
            <View
              style={tailwind`mt-4 flex flex-row justify-center items-center h-100 ${
                isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
              } rounded`}>
              <QRCode
                size={300}
                value={qrCode}
                logoBackgroundColor="transparent"
              />
            </View>
          )}
      
        </ScrollView>
  )
}

export default GenerateQrCode

