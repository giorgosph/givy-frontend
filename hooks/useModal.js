import { useState } from "react";

import CustomModal from "../components/general/CustomModal";

/* -------------------------------------------------------------
 * ------------------- Use to render a Modal -------------------
 * ------------------------------------------------------------- */


/* Data type for typescript 
{
    title,
    text,
    extraStyle,
    extraTitleStyle,
    extraTextStyle,
    buttonText,
    buttonText2,
    onPress,
    onPress2,
  }
*/

const useModal = () => {
  const [visible, setVisible] = useState(false); // Typescript -> false || above object type

  const renderModal = () => {
    if (visible) return (
      <CustomModal 
        visible={!!visible} // make it boolean, Typescript -> just pass visible as object and extract in component
        title={visible.title}
        text={visible.text}
        extraStyle={visible.extraStyle}
        extraTitleStyle={visible.extraTitleStyle}
        extraTextStyle={visible.extraTextStyle}
        buttonText={visible.buttonText}
        buttonText2={visible.buttonText2}
        onPress={visible.onPress}
        onPress2={visible.onPress2}
        onClose={() => setVisible(false)}
      />
    ) 
  };
    
    return { visible, setVisible, renderModal }
}

export default useModal;