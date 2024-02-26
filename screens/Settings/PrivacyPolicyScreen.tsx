import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import CustomHeader from "../../components/general/CustomHeader";
import MainContainer from "../../components/general/MainContainer";

import { MAIN_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";

const PrivacyPolicyScreen = () => {
  return (
    <>
      <CustomHeader title="Privacy Policy" />
      <MainContainer>
        <ScrollView style={styles.container}>
          <Text style={styles.header}>Privacy Policy</Text>
          <Text style={styles.subHeader}>Effective Date: 25 February 2024</Text>

          {/* Section 1 */}
          <Text style={styles.sectionHeader}>1. Introduction</Text>
          <Text style={styles.paragraph}>
            Welcome to Givey ("we" or "us"). This Privacy Policy outlines our
            commitment to safeguarding your privacy and details the collection,
            usage, and protection of your personal information when using our
            mobile application ("the App").
          </Text>

          {/* Section 2 */}
          <Text style={styles.sectionHeader}>2. Information We Collect</Text>

          {/* Subsection 2.1 */}
          <Text style={styles.subSectionHeader}>2.1 Required Information</Text>
          <Text style={styles.paragraph}>
            Upon sign-up, we collect the following information:
          </Text>

          <Text style={styles.paragraph}>
            - Name: We use your name to provide a personalized and user-friendly
            experience within the App.
          </Text>
          <Text style={styles.paragraph}>
            - Gender: This data helps tailor content and interactions to align
            with user preferences.
          </Text>
          <Text style={styles.paragraph}>
            - Username: Your unique identifier within the App, facilitating
            communication and user recognition.
          </Text>
          <Text style={styles.paragraph}>
            - Email: Essential for critical communications, including important
            updates, win notifications, and maintaining the security of your
            account.
          </Text>

          {/* Subsection 2.2 */}
          <Text style={styles.subSectionHeader}>2.2 Optional Information</Text>
          <Text style={styles.paragraph}>Optionally, users may provide:</Text>

          <Text style={styles.paragraph}>
            - Mobile Number: Collected to facilitate contact with winners for
            specific instructions.
          </Text>
          <Text style={styles.paragraph}>
            - Address: If provided, assists in the secure shipment of won items.
          </Text>

          {/* Subsection 2.3 */}
          <Text style={styles.subSectionHeader}>2.3 Security Measures</Text>
          <Text style={styles.paragraph}>
            To ensure the utmost security of your personal information, we
            employ a comprehensive set of measures:
          </Text>

          <Text style={styles.paragraph}>
            - Password Hashing: All passwords are securely hashed before
            storage. Hashing involves a one-way cryptographic function that
            protects your password, ensuring it cannot be deciphered even if
            accessed.
          </Text>
          <Text style={styles.paragraph}>
            - Custom Input Validation: Our stringent input validation measures
            enhance the security of your data by preventing common
            vulnerabilities such as SQL injection and cross-site scripting.
          </Text>
          <Text style={styles.paragraph}>
            - Tokenized Authorization/Authentication: We utilize token-based
            authentication for a secure and efficient user login process,
            enhancing protection against unauthorized access.
          </Text>
          <Text style={styles.paragraph}>
            - SSL/TLS Encryption: Our App employs Secure Socket Layer (SSL) or
            Transport Layer Security (TLS) encryption to safeguard data
            transmitted between your device and our server, preventing data
            interception during transit.
          </Text>
          <Text style={styles.paragraph}>
            - Data Minimization: We adhere to the principle of data
            minimization, collecting and retaining only the information
            necessary for the application's functionality, reducing potential
            risks.
          </Text>
          <Text style={styles.paragraph}>
            - Monitoring and Logging: Continuous monitoring and logging of
            system activities are in place to detect and respond to unusual
            patterns or suspicious activities that could indicate a security
            breach.
          </Text>
          <Text style={styles.paragraph}>
            - Data Backups and Recovery: Regular data backups and a robust
            disaster recovery plan are implemented to ensure data integrity in
            the event of a security incident or data loss.
          </Text>
          <Text style={styles.paragraph}>
            - Security Headers (HTTPS): Security headers, including Content
            Security Policy (CSP) and HTTP Strict Transport Security (HSTS), are
            implemented to enhance browser security and mitigate risks
            associated with cross-site scripting and other attacks.
          </Text>

          {/* Section 3 */}
          <Text style={styles.sectionHeader}>3. Use of Information</Text>
          <Text style={styles.paragraph}>
            The collected information serves the following purposes:
          </Text>

          <Text style={styles.paragraph}>
            - App Usability: Enhances the functionality and performance of the
            App for an optimal user experience.
          </Text>
          <Text style={styles.paragraph}>
            - In-Company Analytics: Aggregated data analysis aids us in
            improving user interactions and overall App performance.
          </Text>
          <Text style={styles.paragraph}>
            - Communication: Enables important updates, win notifications, and
            ensures the security of the App through verified user accounts.
          </Text>

          {/* Section 4 */}
          <Text style={styles.sectionHeader}>4. User Rights</Text>

          {/* Subsection 4.1 */}
          <Text style={styles.subSectionHeader}>
            4.1 Removal of Information
          </Text>
          <Text style={styles.paragraph}>
            Users may request the removal of their information by contacting our
            Privacy Team. However, please note that certain information may be
            retained for legal or security purposes.
          </Text>

          {/* Subsection 4.2 */}
          <Text style={styles.subSectionHeader}>
            4.2 Privacy Policy Changes
          </Text>
          <Text style={styles.paragraph}>
            Users will be promptly informed of any changes to this Privacy
            Policy via email. By continuing to use the App, users acknowledge
            and agree to the updated terms.
          </Text>

          {/* Section 5 */}
          <Text style={styles.sectionHeader}>5. Contact Information</Text>
          <Text style={styles.paragraph}>
            For inquiries, requests, or concerns regarding your privacy, please
            reach out to our Privacy Team through "Contact Us" section.
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
    marginBottom: PIXELS,
    color: "white",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: PIXELS,
    marginBottom: PIXELS / 2,
    color: "white",
  },
  subSectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: PIXELS / 2,
    marginBottom: PIXELS / 4,
    color: "white",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: PIXELS / 2,
    color: "white",
  },
});

export default PrivacyPolicyScreen;
