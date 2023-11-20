import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PIXELS } from '../../utils/constants/styles/dimensions';

const DrawListing = ({ draw }) => {
  const handleNav = () => navigation.navigate('DrawDetailsScreen', {draw});

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNav} >
        <View style={styles.imageContainer}>
          <Text style={styles.image}>Image</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{draw.title}</Text>
          <Text style={styles.text}>{draw.date}</Text>
          <Text style={styles.text}>{draw.brief}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    minHeight: 120,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#7C68F7',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 24,
  },
  imageContainer: {
    flex: 2,
    height: '100%',
  },
  image: {
    minWidth: 120,
    minHeight: 120,
    margin: PIXELS,
  },
  detailsContainer: {
    flex: 3,
    padding: PIXELS,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    color: '#E4EBF2',
    fontSize: 24,
    fontWeight: '800',
    textTransform: 'capitalize',
  },
  text: {
    color: '#E4EBF2',
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
});

export default DrawListing;
