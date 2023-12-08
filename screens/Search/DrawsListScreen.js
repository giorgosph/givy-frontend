import React from "react";
import { View, Text } from "react-native";

import Header from "../../components/general/Header";
import MainContainer from "../../components/general/MainContainer";
import DrawListing from "../../components/search/DrawListing";

import useDraws from "../../hooks/components/useDraws";

const DrawsListScreen = () => {
  const { state, draws } = useDraws();  

  return (
   <>
    <Header />
    <MainContainer centered>
      {draws && draws.length > 0 ? draws.map((draw) => <DrawListing key={draw.id} draw={draw}/>) 
      : (
        <View>
          <Text style={{color: 'white'}}>There are no upcoming Draws, check again later!</Text>
        </View>
      )}
    </MainContainer>
   </>
  )
};

export default DrawsListScreen;
