import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

import ItemListing from "../../components/search/ItemListing";
import CustomHeader from "../../components/general/CustomHeader";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";
import ImageCarousel from "../../components/general/ImageCarousel";

import drawItem from "../../utils/constants/data/drawItem.json"

import { ITEM_LIST_HEIGHT } from "../../utils/constants/styles/dimensions";

const DrawDetailsScreen = ({ route }) => {
  const { draw } = route.params; 
  
  // get Items from redux where drawId=draw.id
  const items = drawItem.filter(item => item.id === draw?.id);
  const images = [draw?.imagePath];

  items && items.map(item => images.push(item.imagePath));

  const handleOptIn = () => {
    // ?? pop up ad
    // send request to server
    // navigate back
    // ?? add to redux/cookies already opted in
  }

  return (
   <>
    <CustomHeader title={draw?.title} />
    <MainContainer centered>
      <ImageCarousel images={images} loop />
      <ScrollView style={styles.container}>
      {items ? items.map(item => 
        <ItemListing item={item}/>
      ) : <Text>No Items to display!</Text>}
      </ScrollView>
      <CustomButton title="Opt In" onPress={handleOptIn} />
    </MainContainer>
   </>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '85%', 
    maxHeight: ITEM_LIST_HEIGHT,
  },
});

export default DrawDetailsScreen;
