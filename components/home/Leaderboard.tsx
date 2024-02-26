import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { TopWinnersType } from "../../utils/types/objectTypes";
import { removeUsernamePrefix } from "../../utils/dataFormater";
import { PIXELS } from "../../utils/constants/styles/dimensions";
import {
  BACKGROUND_SECONDARY_COLOR,
  HEADING_COLOR,
} from "../../utils/constants/styles/colors";

import useLeaderboard from "../../hooks/components/useLeaderboard";

/* ----- Types ----- */
type ItemPropsType = {
  item: TopWinnersType;
  index: number;
};

/* ----------------- */

const Leaderboard = () => {
  const { state, topWinners } = useLeaderboard();

  const renderItem = (itemProps: ItemPropsType) => {
    const { item, index } = itemProps;

    return (
      <View style={[styles.row, index % 2 !== 0 ? styles.even : null]}>
        <Text style={styles.cell}>{removeUsernamePrefix(item.username)}</Text>
        <Text style={styles.cell}>{item.numberOfWins}</Text>
        <Text style={styles.cell}>£{item.totalValue}</Text>
      </View>
    );
  };

  return topWinners.length > 0 ? (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <View style={styles.header}>
          <Text style={[styles.cell, styles.headerText]}>Username</Text>
          <Text style={[styles.cell, styles.headerText]}>Wins</Text>
          <Text style={[styles.cell, styles.headerText]}>Total Wins</Text>
        </View>
        <FlatList
          data={topWinners}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: PIXELS,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
  },
  tableContainer: {
    width: "100%",
    padding: PIXELS,
    borderRadius: 12,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#71445F",
    paddingVertical: 12,
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    borderRadius: 6,
  },
  even: {
    width: "100%",
    backgroundColor: "rgba(244, 98, 188, 0.1)",
  },
  cell: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: HEADING_COLOR,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  headerText: {
    color: HEADING_COLOR,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowRadius: 6,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
});

export default Leaderboard;
