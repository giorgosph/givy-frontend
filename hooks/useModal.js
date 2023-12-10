import { useState } from "react";

import CustomModal from "../components/general/CustomModal";

/* -------------------------------------------------------------
 * ------------------- Use to render a Modal -------------------
 * ------------------------------------------------------------- */

const useModal = () => {
  const [visible, setVisible] = useState(false);

  const renderModal = ({
    title,
    text,
    extraStyle,
    extraTitleStyle,
    extraTextStyle,
    buttonText,
    buttonText2,
    onPress,
    onPress2,
  }) => (
    <CustomModal 
      visible={visible}
      title={title}
      text={text}
      extraStyle={extraStyle}
      extraTitleStyle={extraTitleStyle}
      extraTextStyle={extraTextStyle}
      buttonText={buttonText}
      buttonText2={buttonText2}
      onPress={onPress}
      onPress2={onPress2}
      onClose={() => setVisible(false)}
    />
  );
    
    return { visible, setVisible, renderModal }
}

export default useModal;