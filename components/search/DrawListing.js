import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native'; 

import CustomText from '../general/CustomText';
import CustomTitle from '../general/CustomTitle';

import { PIXELS } from '../../utils/constants/styles/dimensions';
import { AUTH_ACTIVE_COLOR, AUTH_INACTIVE_COLOR, HEADING_FADE_COLOR } from '../../utils/constants/styles/colors';

const DrawListing = ({ draw, opted = false }) => {
  const navigation = useNavigation();
  const handleNav = draw => navigation.navigate('DrawDetails', { draw, opted });

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleNav(draw)}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: draw.imagePath }} resizeMode="cover" />
      </View>
      <View style={[styles.detailsContainer, opted && { paddingBottom: 0 }]}>
        <CustomTitle text={draw.title} size={3} />
        <CustomText text={draw.brief} size={5} extraStyles={styles.title} color={HEADING_FADE_COLOR} />
        <CustomText text={draw.openingDate} extraStyles={styles.text} title={"Available From:"} titleExtraStyles={styles.textTitle} horizontal />
        <CustomText text={draw.closingDate} extraStyles={styles.text} title={"Results On:"} titleExtraStyles={styles.textTitle} horizontal />
      </View>
      {!opted && 
        <View style={styles.textContainer}>
          <CustomTitle text="Click to Join!" color={HEADING_FADE_COLOR} extraStyles={styles.join} />
        </View>
      } 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '21%',
    maxHeight: 180,
    minHeight: 120,
    padding: PIXELS * 2/6, 
    marginVertical: PIXELS / 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: AUTH_INACTIVE_COLOR,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: AUTH_ACTIVE_COLOR,
  },
  imageContainer: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: PIXELS / 4,
    zIndex: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    margin: PIXELS,
    zIndex: 101,
  },
  detailsContainer: {
    width: '60%',
    display: 'flex',
    paddingBottom: PIXELS * 1.5, 
    overflow: 'hidden',   
  },
  title: {
    marginBottom: PIXELS / 4, 
    paddingLeft: PIXELS / 2,
  },
  text: {
    paddingTop: PIXELS / 6,
  },
  textTitle: {
    paddingLeft: PIXELS / 2,
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 6,
    zIndex: 1000,
  },
  join: {
    textShadowRadius: 8,
    textShadowColor: 'black',
    shadowColor: 'white',
    shadowRadius: 16,
    zIndex: 1001,
  }
});

export default DrawListing;
