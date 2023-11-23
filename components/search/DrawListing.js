import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native'; 

import CustomText from '../general/CustomText';
import CustomTitle from '../general/CustomTitle';

import { PIXELS } from '../../utils/constants/styles/dimensions';
import { AUTH_ACTIVE_COLOR, AUTH_INACTIVE_COLOR, HEADING_FADE_COLOR } from '../../utils/constants/styles/colors';

const DrawListing = ({ draw }) => {
  const navigation = useNavigation();

  const handleNav = () => navigation.navigate('DrawDetailsScreen', { draw });

  return (
    <TouchableOpacity style={styles.container} onPress={handleNav}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: draw.imagePath }} resizeMode="cover" />
      </View>
      <View style={styles.detailsContainer}>
        <CustomTitle text={draw.title} size={3} />
        <CustomText text={`brief`} size={3} extraStyles={styles.title} color={HEADING_FADE_COLOR} />
        <CustomText text={`Available From: ${draw.openingDate}`} extraStyles={styles.text} />
        <CustomText text={`Results On: ${draw.closingDate}`} extraStyles={styles.text} />
      </View>
      <View style={styles.textContainer}>
        <CustomTitle text="Click to Join!" color={HEADING_FADE_COLOR} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '21%',
    maxHeight: 180,
    minHeight: 120,
    padding: PIXELS / 2, 
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
    width: 120,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: PIXELS / 4,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    margin: PIXELS,
  },
  detailsContainer: {
    flex: 1,
    display: 'flex',
    paddingBottom: PIXELS,    
  },
  title: {
    marginBottom: PIXELS / 2, 
  },
  text: {
    marginBottom: PIXELS / 6,
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 6,
  }
});

export default DrawListing;
