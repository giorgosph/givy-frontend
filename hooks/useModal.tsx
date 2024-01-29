import React, { useState } from "react";
import { TextStyle, ViewStyle } from "react-native";

import CustomModal, { CustomModalVisibleType } from "../components/general/CustomModal";
import WinnerModal, { WinnerVisibleType } from "../components/draw/WinnerModal";

/* -------------------------------------------------------------
 * ------------------- Use to render a Modal -------------------
 * ------------------------------------------------------------- */

/* --------- Types --------- */
type VisibleType = CustomModalVisibleType | WinnerVisibleType;

/* ------------------------- */

const useModal = () => {
  const [visible, setVisible] = useState<VisibleType | false>(false);

  const renderModal = () => {
    if (!!visible) <CustomModal visible={visible as CustomModalVisibleType} onClose={() => setVisible(false)} />
  };
  
  const renderWinnerModal = () => {
    if(!!visible) return <WinnerModal visible={visible as WinnerVisibleType} onClose={() => setVisible(false)} />
  };

  return { visible, setVisible, renderModal, renderWinnerModal }
}

export default useModal;