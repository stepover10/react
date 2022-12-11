import React, { useEffect } from "react";
import styled, { css } from 'styled-components';

const ToastDomAlert = ({ text, type, removeComponent }) => {
  const isTop = type === 'top';

  useEffect(() => {
    setTimeout(() => {
      removeComponent();
    }, 3000)
  }, [])

  return (
    <StyledModalWrapper
      isTop={isTop}
      isPosition={isTop ? 'top' : 'bottom'}
    >
      <div className="toast-body toast-body-alert">
        {text.split('\n').map((line, lineIdx) => {
          return <div key={lineIdx}>{line}</div>;
        })}
      </div>
    </StyledModalWrapper>
  );
};

export default ToastDomAlert;

const common = 80;

const StyledModalWrapper = styled.div<any>`
  ${({ isTop, isPosition }) => css`
    position: fixed;
    bottom: -${common}px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 635px;
    
    ${isTop && {
      bottom: 'initial',
      top: common,
    }}

    z-index: 9999;
    padding: 16px;
    color: #fff;
    font-size: 14px;
    height: auto;
    width: 100%;
    text-align: center;
    line-height: 20px;
    animation: toast--fadein 0.4s, toast--fadeout 0.4s 2.5s;
    animation-fill-mode: forwards;

    .toast-body {
      background: rgba(0, 0, 0, 0.8);
      border-radius: 4px;
      color: #fff;
      padding: 10px;

      > span, div {
        color: #fff;
      }
    }

    @keyframes toast--fadein {
      from {
        ${isPosition}: -${common}px;
      }
      to {
        ${isPosition}: 0;
      }
    }

    @keyframes toast--fadeout {
      from {
        ${isPosition}: 0;
      }
      to {
        ${isPosition}: -${common}px;
      }
    }
  `}
`;
