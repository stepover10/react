import React, { cloneElement, useState } from 'react';
import { StyledToastContentMask, StyledToastContentWrapper } from "./styled/StyledToastContentWrapper";

const ToastContent = ({ visible, onClose, children }) => {
  if (!visible) return null;

  const [onAnimation, setOnAnimation] = useState(visible);
  const handleClose = () => setOnAnimation(false);
  const handleAnimationEnd = () => !onAnimation && onClose(false);

  return (
    <StyledToastContentWrapper>
      <div
        className={`toast-body toast-body-${onAnimation}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {cloneElement(children, {
          onClose: handleClose,
        })}
      </div>
      <StyledToastContentMask
        className={`toast-mask toast-mask-${onAnimation}`}
        onClick={handleClose}
      />
    </StyledToastContentWrapper>
  );
};

export default ToastContent;
