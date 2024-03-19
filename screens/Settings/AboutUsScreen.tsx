import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import WebsiteIcon from "../../components/icons/WebsiteIcon";
import LinkedInIcon from "../../components/icons/LinkedInIcon";
import ProfileIcon from "../../components/settings/ProfileIcon";
import InstagramIcon from "../../components/icons/InstagramIcon";
import CustomHeader from "../../components/general/CustomHeader";
import MainContainer from "../../components/general/MainContainer";

import {
  WIDTH,
  PIXELS,
  ICON_SIZE,
  MAIN_HEIGHT,
} from "../../utils/constants/styles/dimensions";
import {
  HEADING_COLOR,
  HEADING_FADE_COLOR,
  BACKGROUND_SECONDARY_COLOR,
} from "../../utils/constants/styles/colors";

const AboutUsScreen = () => {
  return (
    <>
      <CustomHeader title="About Us" />
      <MainContainer>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <View style={styles.textContiner}>
            <Text style={styles.textTitle}>🌟 Welcome To Our App 🌟</Text>
            <Text style={styles.textDesc}>
              A place of joy where winning is a matter of time
            </Text>
            <Text style={styles.text}>
              Experience the joy of winning with our app! Our mission is to
              provide an effortless and cost-free way for users to enjoy
              exciting items. Participate in our free raffles and stand a chance
              to win fantastic prizes. Each raffle is packed with multiple
              items, increasing your chances of winning. Best of all, we ship
              these items to you completely free of charge.
            </Text>
          </View>

          <View style={styles.textContiner}>
            <Text style={styles.textTitle}>
              🔥 Get Ready For A Lit Experience 🔥
            </Text>
            <Text style={styles.textDesc}>
              Surf on the lucky waves with just a click
            </Text>
            <Text style={styles.text}>
              Dive into the fun with our app! It's the perfect way to score
              awesome items without spending a dime. Join our free raffles for a
              chance to win big - it's always lit! Plus, we'll handle the
              shipping, so it's hassle-free for you.
            </Text>
          </View>

          <View style={styles.textContiner}>
            <Text style={styles.textTitle}>👨‍💻 About The Developer 👨‍💻</Text>

            <View style={styles.iconsContainer}>
              <ProfileIcon url="https://www.linkedin.com/in/georgios-philippou-617713216/">
                <LinkedInIcon color={HEADING_FADE_COLOR} size={18} />
              </ProfileIcon>
              <ProfileIcon url="https://www.instagram.com/giorgos.ph?igsh=MTFpaHlmYjZwOXdkZQ==">
                <InstagramIcon color={HEADING_FADE_COLOR} size={18} />
              </ProfileIcon>
              <ProfileIcon url="https://giorgosph.github.io/resume-site/">
                <WebsiteIcon color={HEADING_FADE_COLOR} size={24} />
              </ProfileIcon>
            </View>

            <Text style={styles.text}>
              Meet Georgios Philippou, a passionate Full Stack Developer. With a
              Bachelor of Science degree in Computer Science from the University
              of Reading (First Class Honors), Georgios brings expertise in
              crafting top-notch web and native applications. His dedication and
              skills drive the success of our app.
            </Text>
          </View>

          <View style={[styles.textContiner, styles.bottomMargin]}>
            <Text style={styles.textTitle}>🚀 Our Commitment 🚀</Text>
            <Text style={styles.textDesc}>
              Surf on the lucky waves with just a click
            </Text>
            <Text style={styles.text}>
              We are committed to providing a seamless and enjoyable experience
              for our users. Our focus is to offer a place where innovation and
              creativity are coming to the surface, keeping our users
              entertained without any financial burden. By delivering items for
              free, we strive to create a platform where everyone can revel in
              the excitement of winning.
            </Text>
          </View>
        </ScrollView>
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: MAIN_HEIGHT,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: PIXELS / 2,
    color: "#DDD",
  },
  textContiner: {
    width: WIDTH - PIXELS * 2,
    padding: PIXELS,
    marginTop: PIXELS * 2,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: 24,
    overflow: "hidden",
    zIndex: 13,
  },
  textContinerRight: {
    width: "65%",
    marginTop: PIXELS * 2,
    alignSelf: "flex-end",
    zIndex: 13,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: HEADING_COLOR,
    textAlign: "center",
    zIndex: 14,
  },
  textDesc: {
    fontSize: 12,
    fontWeight: "400",
    color: HEADING_FADE_COLOR,
    textAlign: "center",
    zIndex: 14,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: HEADING_COLOR,
    marginTop: PIXELS,
    textAlign: "center",
    zIndex: 14,
  },
  bottomMargin: {
    marginBottom: PIXELS * 2,
  },
  iconsContainer: {
    width: "40%",
    paddingTop: PIXELS / 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "center",
  },
  iconWrap: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});

export default AboutUsScreen;
