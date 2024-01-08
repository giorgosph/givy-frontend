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

import drawItems from "../../utils/constants/data/drawItem.json";

const DrawDetailsScreen = ({ route }) => {
  const { draw } = route.params;

  const { state, items, images, opted, timeRemaining, callback } = useDrawItems(draw);

  const { loading, error } = state.api;

  const disableButton = loading || opted || timeRemaining.expired;
  const buttonTitle = timeRemaining.expired ? "Closed" : opted ? "Already Opted In" : "Opt In"

  return (
   <>
      {callback.renderWinnerModal()}
      <CustomHeader title={draw.title} />
      <MainContainer centered>
        <ImageCarousel images={images} loop />

        <CustomCountdown timeRemaining={timeRemaining} />

        <ScrollView style={styles.container}>
          {items && items.length > 0 ? 
            items.map(item => <ItemListing key={item.id} item={item}/>) 
            : <Text style={{color: 'white'}}>No Items to display!</Text>
          }

          {/* Remove after testing time related lagorithms */}
          {/* {drawItems.map(item => <ItemListing key={item.id} item={item}/>)} */}
        </ScrollView>

        {timeRemaining.closingSoon && <Text style={{color: 'red'}}>Closing soon</Text>}
        <CustomButton 
          title={buttonTitle} 
          disabled={disableButton} 
          style={{opacity: disableButton ? 0.4 : 1}}
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
