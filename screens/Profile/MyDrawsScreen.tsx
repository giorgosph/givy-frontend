import React from "react";
import { View, Text } from "react-native";

import DrawListing from "../../components/draw/DrawListing";
import CustomHeader from "../../components/general/CustomHeader";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";

import { apiStatus } from "../../utils/constants/data/apiStatus";

import useDraws from "../../hooks/components/useDraws";
import SkeletonDraw from "../../components/skeletons/SkeletonDraw";
import { ClientProfileMyDrawsScreenProps, ClientProfileTabProps } from "../../utils/navigation/types";

const MyDraws = ({ navigation }: ClientProfileMyDrawsScreenProps & ClientProfileTabProps) => {
  const { state, userDraws: draws } = useDraws(); // use to fetch draws if not already set
  const loading = state.reqStatus === apiStatus.LOADING;

  const handlePress = async () => {
    await navigation.goBack();
    navigation.navigate("ClientSearchTab");
  }

  return (
    <>
      <CustomHeader title="My Draws" />
      <MainContainer centered>
        {loading ? <SkeletonDraw /> : (
          !!draws && draws.length > 0 ? draws.map(draw => <DrawListing key={draw.id} draw={draw} opted />) 
          : (
            <View>
              <Text style={{color: 'white'}}>You are not registered to any draw yet.</Text>
              <CustomButton title="Find a new Draw!" onPress={handlePress} />
            </View>
          )
        )}

      </MainContainer>
    </>
  )
};

export default MyDraws;
