import { css } from 'styled-components';

export const common = css`
  .font-init {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      'Apple SD Gothic Neo', Arial, sans-serif !important;
  }

  #__loading {
    position: fixed;
    z-index: 9999;
    background: #fff;
    opacity: 0.2;
  }

  .line-clamp-1,
  .line-clamp-2,
  .line-clamp-3,
  .line-clamp-4,
  .line-clamp-5 {
    word-wrap: break-word;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }

  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }

  .line-clamp-4 {
    -webkit-line-clamp: 4;
  }

  .line-clamp-5 {
    -webkit-line-clamp: 5;
  }

  .infinity-point {
    position: relative;
    bottom: 160px;
    left: 0;
    right: 0;
    height: 1px;
    visibility: hidden;
  }

  .css-fx-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .css-pos-r {
    position: relative;
  }

  .css-native-space {
    padding-top: 40px;
  }

  .css-detail-inner-html {
    padding: 5px 18px 16px 18px;
    line-height: 1.36;
  }

  .css-active {
    transition: 0.3s;

    &:active {
      opacity: 0.7;
    }
  }
  
  .img-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .img-radius {
    border-radius: 100px;
  }

  .css-blocked-wrap {
    padding: 0 !important;
    min-height: initial !important;

    .css-blocked {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 56px;
      border-top: 1px solid #ececec;
      margin: -1px 0 0;
      border-bottom: 1px solid #ececec;
      background-color: #fafafa;
      font-size: 14px;
      color: #999;
    }
  }

  .__body_pointer_disabled {
    pointer-events: none;
  }
`;
