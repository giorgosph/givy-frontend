import { useState } from "react";

import WinnerModal from "../components/draw/WinnerModal";
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
    if (!!visible) return (
      <CustomModal 
        visible={!!visible}
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
  
  const renderWinnerModal = () => {
    if(!!visible) return <WinnerModal visible={visible} onClose={() => setVisible(false)} />
  };

  return { visible, setVisible, renderModal, renderWinnerModal }
}

export default useModal;