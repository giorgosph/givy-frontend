import React from "react";
import { View, Text } from "react-native";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

import ItemListing from "../../components/draw/ItemListing";
import CustomButton from "../../components/general/CustomButton";
import CustomHeader from "../../components/general/CustomHeader";
import MainContainer from "../../components/general/MainContainer";

import { includeByID } from "../../utils/filters/drawFilters";
import { ClientProfileMyWinsScreenProps } from "../../utils/navigation/types";

const MyWins = ({ navigation }: ClientProfileMyWinsScreenProps) => {
  const drawItems = useSelector((state: RootState) => state.draw.items); // All items fetched
  const userItems = useSelector((state: RootState) => state.user.wins); 
  const items = includeByID(drawItems, userItems); // Winning items

  const handlePress = async () => {
    navigation.goBack();
    navigation.navigate("ClientSearchTab");
  }

  return (
   <>
    <CustomHeader title="My Wins" />
    <MainContainer centered>
      {items && items.length ? items.map(item => <ItemListing key={item.id} item={item} />) 
      : (
        <View>
          <Text style={{color: 'white'}}>No winning items yet.</Text>
          <CustomButton title={"Find a new Draw!"} onPress={handlePress} />
        </View>
      )}
    </MainContainer>
   </>
  )
};

export default MyWins;
