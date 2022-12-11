import { css } from 'styled-components';

export const CSSInputRadio = css`
  &[type='radio'],
  &[type='radio']:checked {
    appearance: none;
    border-radius: 100%;
    width: 12px;
    height: 12px;
  }

  &[type='radio'] {
    position: relative;
    //top: 18px;
    //right: 15px;
    background-color: #fff;
    border: 1px solid #fff;
    &:after {

      position: absolute;
      content: '';
      width: 16px;
      height: 16px;
      border: 2px solid #ddd;
      border-radius: 100px;
      left: -5px;
      top: -5px;
    }
  }

  &[type='radio']:checked {
    background-color: var(--color-main);

    &:after {
      border: 2px solid var(--color-main);
    }
  }
`;