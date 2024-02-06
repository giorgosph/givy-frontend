import React, { useState } from "react";

import WinnerModal, { WinnerVisibleType } from "../components/draw/WinnerModal";
import CustomModal, { CustomModalVisibleType } from "../components/general/CustomModal";

/* -------------------------------------------------------------
 * ------------------- Use to render a Modal -------------------
 * ------------------------------------------------------------- */

/* --------- Types --------- */
type VisibleType = CustomModalVisibleType | WinnerVisibleType;

/* ------------------------- */

const useModal = () => {
  const [visible, setVisible] = useState<VisibleType | false>(false);

  const renderModal = () => <CustomModal visible={visible as CustomModalVisibleType} onClose={() => setVisible(false)} />
  
  const renderWinnerModal = () => <WinnerModal visible={visible as WinnerVisibleType} onClose={() => setVisible(false)} />

  return { visible, setVisible, renderModal, renderWinnerModal }
}

export default useModal;