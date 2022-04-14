import {View, Text} from 'react-native';
import React from 'react';
import {Button, Dialog, Paragraph, Portal, Provider} from 'react-native-paper';

const ResultDialog = ({scannedValue = 'test', visible, setVisible}) => {
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Result</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{scannedValue}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button color="cyan" onPress={hideDialog}>
              Done
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default ResultDialog;
