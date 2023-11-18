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
      {draws.length ? draws.map((draw) => {
        // TODO -> DrawListing component
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
