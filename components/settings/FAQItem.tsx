import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import { PIXELS } from "../../utils/constants/styles/dimensions";

/* ------- Types ------- */
type PropsType = {
  question: string;
  answer: string;
};

/* --------------------- */

const FAQItem = ({ question, answer }: PropsType) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <View style={styles.faqItem}>
      <TouchableHighlight
        onPress={toggleExpansion}
        style={styles.questionContainer}
      >
        <Text style={styles.question}>{question}</Text>
      </TouchableHighlight>

      {isExpanded && <Text style={styles.answer}>{answer}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  faqItem: {
    width: "90%",
    marginVertical: PIXELS,
  },
  questionContainer: {
    padding: PIXELS / 2,
    alignItems: "center",
    backgroundColor: "#e6baba",
    borderRadius: 4,
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
  },
  answer: {
    marginTop: -PIXELS / 4,
    padding: PIXELS / 2,
    fontSize: 14,
    color: "white",
    backgroundColor: "rgba(230, 186, 186, 0.4)",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export default FAQItem;
