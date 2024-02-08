import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

import ItemListing from "../../components/draw/ItemListing";
import CustomButton from "../../components/general/CustomButton";
import CustomHeader from "../../components/general/CustomHeader";
import MainContainer from "../../components/general/MainContainer";

import { includeByID } from "../../utils/filters/drawFilters";
import { ClientProfileMyWinsScreenProps } from "../../utils/navigation/types";
import { MAIN_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";

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
      <ScrollView style={styles.itemsContainer} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        {items && items.length ? items.map(item => <ItemListing key={item.id} item={item} />) 
        : (
          <View>
            <Text style={{color: 'white'}}>No winning items yet.</Text>
            <CustomButton title={"Find a new Draw!"} onPress={handlePress} />
          </View>
        )}
      </ScrollView>
    </MainContainer>
   </>
  )
};

const styles = StyleSheet.create({
  itemsContainer: {
    width: '100%',
    height: MAIN_HEIGHT - PIXELS * 4,
    display: 'flex',
  },
});

export default MyWins;
