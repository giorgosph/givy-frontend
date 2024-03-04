import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import DrawListing from "../../components/draw/DrawListing";
import CustomHeader from "../../components/general/CustomHeader";
import CustomButton from "../../components/general/CustomButton";
import SkeletonDraw from "../../components/skeletons/SkeletonDraw";
import MainContainer from "../../components/general/MainContainer";

import { apiStatus } from "../../utils/constants/data/apiStatus";

import useDraws from "../../hooks/components/useDraws";
import { MAIN_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";
import { ClientProfileMyDrawsScreenProps } from "../../utils/navigation/types";

const MyDraws = ({ navigation }: ClientProfileMyDrawsScreenProps) => {
  const { state, userDraws: draws } = useDraws(); // use to fetch draws if not already set
  const loading = state.reqStatus === apiStatus.LOADING;

  const handlePress = () => {
    navigation.goBack();
    navigation.navigate("ClientSearchTab");
  };

  return (
    <>
      <CustomHeader title="My Raffles" />
      <MainContainer centered>
        {loading ? (
          <SkeletonDraw />
        ) : (
          <ScrollView
            style={styles.drawsContainer}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!!draws && draws.length > 0 ? (
              draws.map((draw) => (
                <DrawListing key={draw.id} draw={draw} opted />
              ))
            ) : (
              <View>
                <Text style={{ color: "white" }}>
                  You are not registered to any draw yet.
                </Text>
                <CustomButton title="Find a new Draw!" onPress={handlePress} />
              </View>
            )}
          </ScrollView>
        )}
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  drawsContainer: {
    width: "100%",
    height: MAIN_HEIGHT - PIXELS * 4,
    display: "flex",
  },
});

export default MyDraws;
