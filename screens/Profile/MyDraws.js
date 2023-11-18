import React from "react";
import { View, Text } from "react-native";

import CustomHeader from "../../components/general/CustomHeader";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";

const MyDraws = ({ navigation }) => {
  // TODO -> Fetch user's pending draws
  const draws = [];

  return (
    <>
      <CustomHeader title="My Draws" navigation={navigation} />
      <MainContainer>
        {draws.length ? draws.map((draw) => {
          // TODO -> DrawListing component
        }) : (
          <View>
            <Text>You are not registered to any draw yet.</Text>
            {/* TODO -> onPress navigate to SearchTab */}
            <CustomButton title="Find a new Draw!" />
          </View>
        )}
      </MainContainer>
    </>
  )
};

export default MyDraws;
