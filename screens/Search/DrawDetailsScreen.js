import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

import ItemListing from "../../components/search/ItemListing";
import CustomHeader from "../../components/general/CustomHeader";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";
import ImageCarousel from "../../components/general/ImageCarousel";

import { ITEM_LIST_HEIGHT } from "../../utils/constants/styles/dimensions";

import useDrawDetails from "../../hooks/components/useDrawDetails";

const DrawDetailsScreen = ({ route }) => {
  const { draw } = route.params;

  const { loading, error, items, images, handleOptIn } = useDrawDetails(draw);
  // TODO -> if already opted in disable button and change text and opacity

  return (
   <>
      <CustomHeader title={draw.title} />
      <MainContainer centered>
        <ImageCarousel images={images} loop />
        <ScrollView style={styles.container}>
          {items ? items.map(item => 
            <ItemListing item={item}/>
          ) : <Text>No Items to display!</Text>}
        </ScrollView>
        <CustomButton 
          title="Opt In" 
          disabled={loading} 
          style={{opacity: loading ? 0.4 : 1}}
          onPress={()=>handleOptIn(draw.id)} 
        />
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
