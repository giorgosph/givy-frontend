import React from "react";
import { View, Text } from "react-native";

import CustomButton from "../../components/general/CustomButton";
import CustomHeader from "../../components/general/CustomHeader";
import MainContainer from "../../components/general/MainContainer";

const MyWins = ({ navigation }) => {
  // TODO -> Fetch user's winning draws
  const wins = [];
  return (
   <>
    <CustomHeader title="My Wins" navigation={navigation} />
    <MainContainer>
      {wins.length ? wins.map((win) => {
        // TODO -> DrawListing component
      }) : (
        <View>
          <Text>No winning draws yet.</Text>
          {/* TODO -> onPress navigate to SearchTab */}
          <CustomButton title={"Find a new Draw!"} />
        </View>
      )}
    </MainContainer>
   </>
  )
};

export default MyWins;
