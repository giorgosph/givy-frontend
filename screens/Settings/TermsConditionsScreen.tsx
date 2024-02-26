import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import CustomHeader from "../../components/general/CustomHeader";
import MainContainer from "../../components/general/MainContainer";

import { MAIN_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";

const TermsConditionsScreen = () => {
  return (
    <>
      <CustomHeader title="Terms & Conditions" />
      <MainContainer>
        <ScrollView style={styles.container}>
          <Text style={styles.header}>Terms and Conditions</Text>
          <Text style={styles.subHeader}>Effective Date: 25 February 2024</Text>

          {/* Section 1 */}
          <Text style={styles.sectionHeader}>1. Acceptance of Terms</Text>
          <Text style={styles.paragraph}>
            By accessing or using the Givey mobile application ("the App"), you
            agree to comply with and be bound by these Terms and Conditions. If
            you do not agree to these terms, please do not use the App.
          </Text>

          {/* Section 2 */}
          <Text style={styles.sectionHeader}>2. Use of the App</Text>
          <Text style={styles.paragraph}>
            You agree to use the App for lawful purposes and in a way that does
            not infringe on the rights of any third party or restrict or inhibit
            anyone else's use of the App. Prohibited behavior includes but is
            not limited to:
          </Text>

          <Text style={styles.paragraph}>
            - Posting or transmitting content that is offensive, harmful, or
            otherwise objectionable.
          </Text>
          <Text style={styles.paragraph}>
            - Engaging in any form of unlawful or criminal activity.
          </Text>
          <Text style={styles.paragraph}>
            - Attempting to gain unauthorized access to the App or any
            associated systems or networks.
          </Text>

          {/* Section 3 */}
          <Text style={styles.sectionHeader}>3. User Accounts</Text>
          <Text style={styles.paragraph}>
            In order to access certain features of the App, you may be required
            to create a user account. You are responsible for maintaining the
            confidentiality of your account information and for restricting
            access to your device. You agree to accept responsibility for all
            activities that occur under your account.
          </Text>

          {/* Section 4 */}
          <Text style={styles.sectionHeader}>4. Intellectual Property</Text>
          <Text style={styles.paragraph}>
            The App and its original content, features, and functionality are
            owned by Givey and are protected by international copyright,
            trademark, patent, trade secret, and other intellectual property or
            proprietary rights laws.
          </Text>

          {/* Section 5 */}
          <Text style={styles.sectionHeader}>5. Termination</Text>
          <Text style={styles.paragraph}>
            We may terminate or suspend your account and bar access to the App
            immediately, without prior notice or liability, under our sole
            discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of the Terms.
          </Text>

          {/* Section 6 */}
          <Text style={styles.sectionHeader}>
            6. Changes to Terms and Conditions
          </Text>
          <Text style={styles.paragraph}>
            We reserve the right to update or change these Terms and Conditions
            at any time without prior notice. Your continued use of the App
            after we post any modifications to the Terms and Conditions
            constitutes your acknowledgment of the changes and your agreement to
            abide and be bound by the modified terms.
          </Text>

          {/* Section 7 */}
          <Text style={styles.sectionHeader}>7. Contact Information</Text>
          <Text style={styles.paragraph}>
            For inquiries, requests, or concerns regarding these Terms and
            Conditions, please reach out to our Customer Support through
            "Contact Us" section.
          </Text>
        </ScrollView>
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: MAIN_HEIGHT,
    paddingHorizontal: PIXELS,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: PIXELS / 2,
    color: "white",
  },
  subHeader: {
    fontSize: 16,
    color: "gray",
    marginBottom: PIXELS,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: PIXELS / 2,
    color: "white",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: PIXELS / 2,
    color: "white",
  },
});

export default TermsConditionsScreen;
