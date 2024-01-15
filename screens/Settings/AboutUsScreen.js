import React from 'react';
import { Text, StyleSheet } from 'react-native';

import CustomHeader from '../../components/general/CustomHeader';
import MainContainer from '../../components/general/MainContainer';
import { ScrollView } from 'moti';
import { PIXELS } from '../../utils/constants/styles/dimensions';

const AboutUsScreen = () => {
  return (
    <>
      <CustomHeader title="About Us"/>
      <MainContainer>

        <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>

          <Text style={styles.title}>🌟 Welcome to Our App</Text>
          <Text style={styles.text}>
            Experience the joy of winning with our app! Our mission is to provide an effortless and
            cost-free way for users to enjoy exciting items. Participate in our free raffles and stand a
            chance to win fantastic prizes. Each raffle is packed with multiple items, increasing your
            chances of winning. Best of all, we ship these items to you completely free of charge.
          </Text>

          <Text style={styles.title}>🔥 Get Ready for a Lit Experience</Text>
          <Text style={styles.text}>
            Dive into the fun with our app! It's the perfect way to score awesome items without spending a dime.
            Join our free raffles for a chance to win big - it's always lit! Plus, we'll handle the shipping,
            so it's hassle-free for you.
          </Text>

          <Text style={styles.title}>👨‍💻 About the Developer</Text>
          <Text style={styles.text}>
            Meet Georgios Philippou, a passionate Full Stack Developer. With a Bachelor of Science degree
            in Computer Science from the University of Reading (First Class Honors), Georgios brings
            expertise in crafting top-notch web and native applications. His dedication and skills drive
            the success of our app.
          </Text>

          <Text style={styles.title}>🚀 Our Commitment</Text>
          <Text style={styles.text}>
            We are committed to providing a seamless and enjoyable experience for our users. Our focus is
            on keeping you entertained without any financial burden. By delivering items for free, we
            strive to create a platform where everyone can revel in the excitement of winning.
          </Text>

        </ScrollView>
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PIXELS,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: PIXELS / 2,
    color: '#DDD',
  },
  text: {
    fontSize: 16,
    marginVertical: PIXELS / 4,
    paddingHorizontal: PIXELS / 2,
    textAlign: 'center',
    lineHeight: 22,
    color: '#CCC',
  },
});

export default AboutUsScreen;
