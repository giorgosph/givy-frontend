import React from "react";
import { View, Text } from "react-native";

import DrawListing from "../../components/search/DrawListing";
import CustomButton from "../../components/general/CustomButton";
import CustomHeader from "../../components/general/CustomHeader";
import MainContainer from "../../components/general/MainContainer";

import useDraws from "../../hooks/components/useDraws";

const MyWins = ({ navigation }) => {
  const { wins: draws, navToSearch } = useDraws();

  return (
   <>
    <CustomHeader title="My Wins" navigation={navigation} />
    <MainContainer centered>
      {draws && draws.length > 0 ? draws.map(draw => <DrawListing key={draw.id} draw={draw} noFooter />) 
      : (
        <View>
          <Text>No winning draws yet.</Text>
          <CustomButton title={"Find a new Draw!"} onPress={navToSearch} />
        </View>
      )}
    </MainContainer>
   </>
  )
};

export default MyWins;
