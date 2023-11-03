import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ACTIVE_ICON, BACKGROUND_COLOR } from "../../utils/styles/colors";
import { PIXELS } from "../../utils/styles/dimensions";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.comfyTitle}>Dating</Text>
      <View style={styles.avatar}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: PIXELS * 6.5,
    paddingTop: PIXELS * 2.5,
    paddingHorizontal: PIXELS * 1.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
  comfyTitle: {
    color: ACTIVE_ICON,
    fontSize: 30,
    fontWeight: '800',
  },
  avatar: {
    width: 45,
    height: 45,
    backgroundColor: '#301515',
    borderRadius: 9999,
    position: 'relative', 
    top: PIXELS / 4,
  },
  comfyIcons: {
    width: 32,
    height: 32,
    left: 328,
    top: 22,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  comfyIcon: {
    width: 28.04,
    height: 28.04,
    borderRadius: 14.02,
    backgroundColor: '#F27B7B',
  },
});

export default Header;