import styled from 'styled-components';

const translateY = 120;

export const StyledToastContentWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  .toast-body {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    transform: translate(0, ${translateY}%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 102;

    > span {
      color: #fff;
    }
  }

  .toast-body-true {
    animation: toast-body-content-up forwards;
    animation-duration: 0.3s;
  }

  .toast-body-false {
    animation: toast-body-content-down forwards;
    animation-duration: 0.3s;
  }

  @keyframes toast-body-content-up {
    from {
      transform: translate(0, ${translateY}%);
    }
    to {
      transform: translate(0, 0);
    }
  }

  @keyframes toast-body-content-down {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, ${translateY}%);
    }
  }
`;

export const StyledToastContentMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 101;

  &.toast-mask-true {
    animation: toast-body-mask-view forwards;
    animation-duration: 0.3s;
  }

  &.toast-mask-false {
    animation: toast-body-mask-view-out forwards;
    animation-duration: 0.3s;
  }

  @keyframes toast-body-mask-view {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes toast-body-mask-view-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
