import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "../../context/store";

const PersonalDetailsScreen = () => {
  authCtx = useContext(AuthContext);

  return (
   <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
     <Text onPress={authCtx.logout}>
       PersonalDetailsScreen
     </Text>
   </View>
  )
};

export default PersonalDetailsScreen;
