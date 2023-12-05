import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import CustomHeader from "../../components/general/CustomHeader";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";
import { optedIn } from "../../utils/filters/drawFilters";
import DrawListing from "../../components/search/DrawListing";

import useMyDraws from "../../hooks/components/useMyDraws";

const MyDraws = ({ navigation }) => {
  const { draws, onPress } = useMyDraws();

  return (
    <>
      <CustomHeader title="My Draws" navigation={navigation} />
      <MainContainer centered>
        {draws && draws.length > 0 ? draws.map(draw => <DrawListing key={draw.id} draw={draw} noFooter />) 
        : (
          <View>
            <Text style={{color: 'white'}}>You are not registered to any draw yet.</Text>
            <CustomButton title="Find a new Draw!" onPress={onPress} />
          </View>
        )}
      </MainContainer>
    </>
  )
};

export default MyDraws;
