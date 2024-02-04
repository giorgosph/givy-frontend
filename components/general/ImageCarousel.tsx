import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { IMAGE_CAROUSEL_HEIGHT, IMAGE_CAROUSEL_WIDTH, PIXELS, WIDTH } from '../../utils/constants/styles/dimensions';

/* ------- Types -------*/
type PropsType = {
  images: string[]; // TODO -> see if image type can be specified with a better value instead of string
  loop?: boolean;
};

/* ---------------------*/

const ImageCarousel = (props: PropsType) => {
  const { images, loop } = props;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
    </View>
  );
  

  return (
    <Carousel
      data={images}
      renderItem={renderItem}
      sliderWidth={WIDTH}
      itemWidth={IMAGE_CAROUSEL_WIDTH}
      layout="default"
      loop={loop}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: { 
    marginVertical: PIXELS * 2,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: PIXELS / 2,
  },
  image: { 
    width: IMAGE_CAROUSEL_WIDTH,
    height: IMAGE_CAROUSEL_HEIGHT,
    borderRadius: 4,
  }
});
export default ImageCarousel;
