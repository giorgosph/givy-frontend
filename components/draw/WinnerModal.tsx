import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';

import CustomText from '../general/CustomText';
import CustomTitle from '../general/CustomTitle';
import CustomButton from '../general/CustomButton';

import { removeUsernamePrefix } from '../../utils/dataFormater';
import { HEIGHT, MAIN_HEIGHT, PIXELS } from '../../utils/constants/styles/dimensions';

/* --------- Types --------- */
type PropsType = {
  visible: WinnerVisibleType;
  onClose: () => void;
};

export type WinnerVisibleType = {
  items: ItemsInterface[];
  winners: { [I in keyof ItemsInterface]: string };
}

// TODO -> improve those types and move them to new file in order to use them in different places
export interface ItemsInterface {
  id: number;
  title: string;
};
/* ------------------------- */

const WinnerModal = (props: PropsType) => {
  const { visible, onClose } = props;

  return (
    <Modal visible={!!visible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <CustomTitle text="Winners" color={'gold'} />
        <View style={styles.modalHeader} />

        <View style={styles.textContainer}>
          {visible.items.map(item => (
            <View key={item.id} style={styles.textWinnersContainer}>
              <CustomTitle text={`${item.title}:`} size={6} color={'black'} />
              <CustomText text={removeUsernamePrefix(visible.winners[item.id])} size={1} color={'black'} />
            </View>
          ))}
        </View>
        <View style={styles.buttonsContainer}>
          <CustomButton title="OK" style={styles.button} textStyle={styles.buttonText} onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: '80%',
    minHeight: MAIN_HEIGHT * 4/10,
    paddingTop: PIXELS,
    paddingBottom: PIXELS * 2.5,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: PIXELS * 2,
    position: 'absolute',
    top: HEIGHT / 2 - MAIN_HEIGHT * 3/10,
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
  textContainer: {
    width: '80%',
    padding: PIXELS,
    justifyContent: 'center',
  },
  textWinnersContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  buttonsContainer: {
    width: '100%',
    height: PIXELS * 4,
    paddingHorizontal: PIXELS * 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  button: {
    width: '40%',
    height: '60%',
    backgroundColor: 'transparent',
    borderColor: '#4285F4', 
    borderWidth: 0.5, 
    borderRadius: 3,
  },
  buttonText: {
    color: '#4285F4', 
    textTransform: 'none',
    paddingVertical: PIXELS / 4,
  }
});

export default WinnerModal;
