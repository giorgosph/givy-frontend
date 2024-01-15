import React from 'react';

import FAQItem from '../../components/settings/FAQItem';
import CustomHeader from '../../components/general/CustomHeader';
import MainContainer from '../../components/general/MainContainer';

const FAQScreen = () => {
  return (
    <>
      <CustomHeader title="FAQ"/>
      <MainContainer centered>
        <FAQItem
          question="What is Givey all about?"
          answer="Givey is a platform dedicated to providing users with a free and exciting way to win amazing items. Participate in our free raffles and stand a chance to win cool prizes without any expenses. We're all about making giving and receiving joyful!"
        />

        <FAQItem
          question="How do I enter a raffle?"
          answer="Entering a raffle is easy! Simply navigate to the 'Search' section, choose the raffle you're interested in, and click the 'Opt In' button. It's a hassle-free process, and you could be the lucky winner of fantastic items!"
        />

        <FAQItem
          question="Is shipping really free?"
          answer="Yes, absolutely! We're committed to keeping our users free from expenses. If you win an item in a raffle, we'll handle the shipping for you. No hidden costs - just the joy of receiving your prize!"
        />
      </MainContainer>
    </>

  );
};

export default FAQScreen;
