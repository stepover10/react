import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import 'jodit/build/jodit.min.css';
import { Jodit } from 'jodit';
import { joditConfig } from './module/joditConfig';
import {getContrastYIQ} from "app.components/__test__/jodit/module/getContrastYIQ";

const JoditTest = ({ placeholder }) => {
  const newEditor = useRef(null);
  const [open, setOpen] = useState(false);

  // const handleSubmit = () => {
  //   console.log(newEditor.current.value);
  // };
  //
  // const onComplete = (result: string[]) => {
  //   let html = '';
  //   result.forEach((item) => (html += `<img src="${item}" />`));
  //   newEditor.current.s.insertHTML(html);
  //   setOpen(false);
  // };

  useEffect(() => {
    newEditor.current = Jodit.make('#editor', {
      ...joditConfig({
        imageUploadHandler: () => setOpen(true),
      }),
    });

    const regex = /[^0-9]/g;
    const selection: any = window.getSelection();
    const getFontSize = document.getElementById('lnk-font-size');
    const getFontFamily = document.getElementById('lnk-font-family');
    const getFontColor = document.getElementById('lnk-font-color-picker-icon');
    const getFontBg = document.getElementById('lnk-font-bg-color-picker');

    const initStyle = {
      fontFamily: '돋움',
      fontSize: '15',
    }

    newEditor.current.events.on('click, keyup', () => {
      try {
        const currentNode: any =
          selection?.anchorNode?.style ||
          selection?.anchorNode?.parentNode.style ||
          null;

        if (currentNode) {
          const {
            fontSize,
            fontFamily,
            color,
            backgroundColor
          } = currentNode;

          const setFontColor = !color ? '#000000' : color;
          const setBackgroundColor = !backgroundColor ? '#ffffff' : backgroundColor;

          getFontColor.style.backgroundColor = setFontColor;
          getFontBg.style.backgroundColor = setBackgroundColor;
          getFontBg.querySelector('img').style.filter = getContrastYIQ(setBackgroundColor);

          getFontFamily.innerText = fontFamily || initStyle?.fontFamily;
          getFontSize.innerText = fontSize?.replace(regex, '') || initStyle.fontSize;

        } else {
          getFontColor.style.backgroundColor = '#000';

          getFontBg.style.backgroundColor = '#fff';
          getFontBg.querySelector('img').style.filter = getContrastYIQ('#ffffff');

          getFontFamily.innerText = initStyle.fontFamily;
          getFontSize.innerText = initStyle.fontSize;
        }
      } catch (error) {
        console.error(error);
      }
    });
  }, []);

  return (
    <StyledWrapper>
      <textarea id="editor" name="editor" />
    </StyledWrapper>
  );
};

export default JoditTest;

const StyledWrapper = styled.div`
  padding: 10px;

  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  strong,
  h6 {
    margin: initial;
    padding: revert;
    color: revert;
  }

  .jodit-container {
    border: 1px solid #ebecef;
    .jodit-toolbar-collection {
      background: #fcfcfc;
    }
    .jodit-toolbar-editor-collection_size_middle.jodit-toolbar-editor-collection_mode_horizontal {
      background: none;
    }
  }
  
  .jodit-placeholder {
    padding: 20px;
  }

  .jodit-workplace {
    min-height: 500px !important;
    caret-color : black;
    .jodit-wysiwyg {
      background: #fff;
      resize: vertical;
      min-height: 500px !important;
      padding: 20px;
    }
  }

  .jodit-ui-separator {
    margin: 2px 8px;
    height: 20px;
    position: relative;
    top: 7px;
  }

  .jodit-toolbar-editor-collection {
    .jodit-ui-group_line_true{
      padding: 0 5px;
    }
    .jodit-ui-group_line_true:nth-child(2) {
      height: 45px;
      border-bottom: 1px solid #eee;
      align-items: center;
    }
  }
  

  .jodit-toolbar-button[aria-label='폰트'],
  .jodit-toolbar-button[aria-label='폰트크기'] {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      width: 100%;
    }
  }

  .jodit-toolbar-button[aria-label='폰트크기'] {
    width: 60px;
  }

  .jodit-toolbar-button_text-icons_true button {
    padding: 0 5px;
  }
  
  // 상단 커스텀 아이콘
  .custom-button-img {
    display: flex;
    align-items: center;
    justify-items: center;
    font-size: 13px;
    font-weight: 400;
    width: auto;
    padding: 0 4px;
    margin-right: 3px;

    > img {
      width: 16px;
      margin: 0 7px 0 0;
    }
  }
  
  .jodit-toolbar-button__text {
    position: relative;
    font-size: 13px;
    
    #lnk-font-family,
    #lnk-font-size {
      display: block;
      width: 100%;
      text-align: left;
    }

    #lnk-font-color-picker {
      display: flex;
      align-items: center;
      width: 23px;
      height: 23px;

      > img {
        width: 12px;
        margin: 0 auto;
      }

      #lnk-font-color-picker-icon {
        position: absolute;
        top: 12px;
        right: 0;
        background: #000;
        box-shadow: inset 0 0 0 1px #eee;
        width: 6px;
        height: 6px;
      }
    }

    #lnk-font-bg-color-picker {
      display: flex;
      align-items: center;
      width: 18px;
      height: 18px;
      background: #fff;
      border-radius: 4px;
      box-shadow: inset 0 0 0 1px #eee;
      
      > img {
        width: 12px;
        margin: 0 auto;
      }
    }

    .font-bg-text {
      mix-blend-mode: difference;
    }
  }

  .jodit-toolbar-button {
    .icon-custom {
      width: 17px;

      > img {
        width: 100%;
        margin: -1px 0 0;
      }
    }

    .icon-custom.jodit-icon_italic,
    .icon-custom.font-st {
      width: 13px;
      margin: 3px 0 0;
    }
  }
  
  .jodit-wysiwyg ::-webkit-selection,
  [contenteditable]::-webkit-selection {
    background: rgba(113, 197, 255, 0.53);
  }

  .jodit-wysiwyg ::-moz-selection,
  [contenteditable]::-moz-selection {
    background: rgba(113, 197, 255, 0.53);
  }

  .jodit-wysiwyg ::selection,
  [contenteditable]::selection {
    background: rgba(113, 197, 255, 0.53);
  }


  .jodit-ui-group.jodit-ui-group_size_middle {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    > span.jodit-toolbar-button {
      flex: 0 0 auto;
    }
  }
`;
