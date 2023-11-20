import React from "react";
import { View, Text } from "react-native";

import Header from "../../components/general/Header";
import MainContainer from "../../components/general/MainContainer";

const DrawsListScreen = () => {
  // TODO -> get current draws
  const draws = [];
  
  return (
   <>
    <Header />
    <MainContainer>
      {draws.length > 0? draws.map((draw) => {
        // TODO -> DrawListing component
        <Text>HERE!</Text>
      }) : (
        <View>
          <Text>There are no upcoming Draws, check again later!</Text>
        </View>
      )}
    </MainContainer>
   </>
  )
};

export default DrawsListScreen;
