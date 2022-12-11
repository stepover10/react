import { createGlobalStyle } from 'styled-components';
import {common} from 'app.styled/common';
import resetCSS from './resetCSS';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-main: #ffd200;
    --color-sub: #5e5050;
    --color-second: #3d79f1;
    --color-third: #fc3500;
    --swiper-navigation-size: 22px !important;
    --swiper-theme-color: #ffd200 !important;
  }
  
  .jodit-popup__content{
    //padding: 0;
    max-height: 400px;
  }
  
  .jodit-tabs__buttons {
    .jodit-ui-button_Text {
      display: none;
    }
  }

  .jodit-toolbar-button__text {
    span[data-font="맑은고딕"] {
      font-family: 'malgun gothic', '맑은 고딕';
    }

    span[data-font="나눔고딕"] {
      font-family: '나눔 고딕';
    }

    span[data-font="명조"] {
      font-family: 'AppleMyungjo';
    }

    span[data-font="나눔명조"] {
      font-family: '나눔 명조';
    }
  }
  
  // 백그라운스 스크롤 방지 스타일
  body.__background_scroll_stop {
    overflow: hidden !important;
  }
  
  ${common};
  
  .ReactQueryDevtoolsPanel * {
    color: #fff;
  }
  
  
`;