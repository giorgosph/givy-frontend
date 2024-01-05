import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

import ItemListing from "../../components/draw/ItemListing";
import CustomHeader from "../../components/general/CustomHeader";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";
import ImageCarousel from "../../components/general/ImageCarousel";

import { ITEM_LIST_HEIGHT } from "../../utils/constants/styles/dimensions";

import useDrawItems from "../../hooks/components/useDrawItems";
import CustomCountdown from "../../components/general/CustomCountdown";

const DrawDetailsScreen = ({ route }) => {
  const { draw, opted } = route.params;

  const { state, items, images, callback } = useDrawItems(draw);
  const { loading, error } = state.api;
  // TODO -> if already opted in disable button and change text and opacity

  return (
   <>
      <CustomHeader title={draw.title} />
      <MainContainer centered>
        <ImageCarousel images={images} loop />
        <CustomCountdown closingDate={draw.closingDate} />
        <ScrollView style={styles.container}>
          {items && items.length > 0 ? items.map(item => 
            <ItemListing key={item.id} item={item}/>
          ) : <Text style={{color: 'white'}}>No Items to display!</Text>}
        </ScrollView>
        <CustomButton 
          title={!opted ? "Opt In" : "Already Opted In"} 
          disabled={loading || opted} 
          style={{opacity: loading ? 0.4 : 1}}
          onPress={()=>callback.handleOptIn(draw.id)} 
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
