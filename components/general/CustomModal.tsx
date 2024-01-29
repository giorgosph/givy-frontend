import React from 'react';
import { Modal, View, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

import CustomText from './CustomText';
import CustomTitle from './CustomTitle';

import { MAIN_HEIGHT, PIXELS } from '../../utils/constants/styles/dimensions';

/* --------- Types --------- */
type ModalPropsType = {
  visible: CustomModalVisibleType;
  onClose: () => void
};

export type CustomModalVisibleType = {
  title: string;
  text: string;
  extraStyle?: ViewStyle;
  extraTitleStyle?: TextStyle;
  extraTextStyle?: TextStyle;
  buttonText?: string;
  buttonText2?: string;
  onPress: () => any;
  onPress2?: () => any;
};

/* ------------------------- */

const CustomModal = (props: ModalPropsType) => {
  const { visible, onClose } = props;
  const { title, text, extraStyle, extraTitleStyle, extraTextStyle, buttonText, buttonText2, onPress, onPress2 } = visible;
  
  const handlePress1 = () => {
    if (onPress) {
      onPress();
      onClose();
    } else onClose();
  };

  const handlePress2 = () => {
    if (onPress2) {
      onPress2();
      onClose();
    } else onClose();
  };

  return (
    <Modal visible={!!visible} transparent animationType="slide">
      <View style={[styles.modalContainer, extraStyle]}>
        <CustomTitle text={title} extraStyles={extraTitleStyle} color={'black'} />
        <View style={styles.modalHeader} />
        <CustomText text={text} size={1} extraStyles={extraTextStyle} color={'black'} />
        <View style={styles.buttonsContainer}>
          {onPress2 &&  
            <TouchableOpacity style={styles.button} onPress={handlePress2}>
              <CustomText text={buttonText2 || 'Cancel'} size={2} color={'#4285F4'} />
            </TouchableOpacity>
          }
          <TouchableOpacity style={[styles.button, styles.buttonBorder]} onPress={handlePress1}>
            <CustomText text={buttonText || 'OK'} size={1} color={'#4285F4'} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    minHeight: MAIN_HEIGHT * 4/10,
    paddingTop: PIXELS,
    paddingBottom: PIXELS * 2.5,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  modalHeader: {
    width: '80%',
    height: 2,
    marginTop: PIXELS / 2,
    marginBottom: PIXELS,
    backgroundColor: '#aaa',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5, 
    elevation: 2, 
  },
  buttonsContainer: {
    width: '100%',
    height: PIXELS * 2.5,
    paddingHorizontal: PIXELS * 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  button: {
    paddingVertical: PIXELS / 4,
    paddingHorizontal: PIXELS / 2,
    color: '#4285F4', 
  },
  buttonBorder: {
    borderColor: '#4285F4', 
    borderWidth: 0.5, 
    borderRadius: 3,
  },
});

export default CustomModal;
