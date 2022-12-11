import React, { cloneElement, useState } from "react";
import { StyledToastContentMask, StyledToastContentWrapper } from "./styled/StyledToastContentWrapper";

const ToastDomContent = (props) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => setVisible(false);
  const handleAnimationEnd = () => {
    !visible && props.removeComponent();
  };

  return (
    <StyledToastContentWrapper>
      <div
        className={`toast-body toast-body-${visible}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {cloneElement(props.content, {
          onClose: handleClose
        })}
      </div>

      <StyledToastContentMask
        className={`toast-mask toast-mask-${visible}`}
        onClick={handleClose}
      />

    </StyledToastContentWrapper>
  );
};

export default ToastDomContent;
