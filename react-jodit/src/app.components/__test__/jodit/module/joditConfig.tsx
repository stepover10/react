import '@simonwep/pickr/dist/themes/nano.min.css';
import {getContrastYIQ} from "app.components/__test__/jodit/module/getContrastYIQ";
import {pickrOption} from "app.components/__test__/jodit/module/pickrOption";
import {editorStyleColor} from "app.components/__test__/jodit/module/editorStyleColor";      // 'nano' theme

const popupView = `<div class="runColorPic"></div>`;

export const joditConfig = ({
  imageUploadHandler,
  placeholder = '내용을 입력해주세요.',
}) => {
  return {
    inline: true,
    placeholder,
    height: 'auto',
    toolbarAdaptive: false,
    hidePoweredByJodit: true,
    saveSelectionOnBlur: false,
    cursorAfterAutofocus: true,
    toolbarInlineForSelection: false,
    disabled: false,
    // enter: "SPAN",
    useSearch: true,
    colorPickerDefaultTab: 'font',
    defaultFontSizePoints: 'px',
    // disablePlugins: "color",

    cleanHTML: {
      denyTags: 'script',
    },

    style: {
      font: "15px 돋움",
    },

    events: {
      getIcon: function (name, control, clearName) {
        switch (clearName) {
          case 'video':
            return `<span class="custom-button-img"><img src="/images/button-play.png" />동영상</span>`;
          case 'link':
            return `<span class="custom-button-img"><img src="/images/button-link.png" />링크</span>`;
          case 'table':
            return '<span class="custom-button-img"><img src="/images/cells.png" />표</span>';

          case 'bold':
            return '<span class="icon-custom"><img src="/images/icons8-bold-96.png" /></span>';
          case 'italic':
            return '<span class="icon-custom"><img src="/images/icons8-edit-50.png" /></span>';
          case 'underline':
            return '<span class="icon-custom"><img src="/images/icons8-underline-64.png" /></span>';
          case 'strikethrough':
            return '<span class="icon-custom font-st"><img src="/images/icons8-font-st-48.png" /></span>';

          // case 'left':
          //   return '<span class="icon-custom font-st"><img src="/images/align-left-svgrepo-com.svg" /></span>';
          // case 'center':
          //   return '<span class="icon-custom font-st"><img src="/images/center-align.png" /></span>';
        }
      },
    },


    buttons: [
      // 'cut',
      // 'fullsize',
      // 'table',
      // '---',
      // 'print',
      {
        name: 'imgCustom',
        template: function () {
          return `<div class="custom-button-img"><img src="/images/button-image.png" />사진</div>`;
        },
        exec: function () {
          imageUploadHandler();
        },
      },

      'video',
      'link',
      'table',

      '---',

      'undo',
      'redo',

      '\n',

      {
        tooltip: '폰트',
        list: [
          '돋움',
          '맑은고딕',
          '바탕',
          '궁서',
          '나눔고딕',
          '나눔명조'
        ],

        template: function () {
          return `<div id="lnk-font-family">돋움</div>`;
        },

        childTemplate: (editor, key, value) =>
          `<span data-font="${key}">${value}</span>`,

        exec(editor, _, { control }) {
          let element = control.args && control.args[0]; // h1, h2 ...
          if (!element) return false;

          const option: any = {};
          if (!editor.s.html.includes('font-custom')) option.className = 'font-custom';
          editor.s.applyStyle({ fontFamily: element }, option);
          const getFont = document.getElementById('lnk-font-family');
          getFont.innerText = element;
        },
      },

      {
        tooltip: '폰트크기',
        list: [
          '10',
          '11',
          '12',
          '13',
          '16',
          '20',
          '24',
          '30',
          '36',
          '48',
          '60',
          '72',
          '96',
        ],
        template: function () {
          return `<div id="lnk-font-size">13</div>`;
        },

        childTemplate: (editor, key, value) =>
          `<span class="${key}">${value}</span>`,

        exec: (editor, _, { control }) => {
          let element = control.args && control.args[0]; // h1, h2 ...
          if (!element) return false;

          editorStyleColor.setClass(editor, {
            fontSize: element + 'px'
          })

          setTimeout(() => {
            const getFont = document.getElementById('lnk-font-size');
            getFont.innerText = element;
          }, 10);
          // editor.setEditorValue(); // Synchronizing the state of the WYSIWYG editor and the source textarea
        },
      },

      '|',

      'bold',
      'italic',
      'underline',
      'strikethrough',
      // "brush",
      {
        // iconURL
        name: 'T',
        tooltip: '폰트컬러',
        template () {
          return `
            <div id="lnk-font-color-picker">
              <img src="/images/icons8-font-48.png" />
              <i id="lnk-font-color-picker-icon" style="background-color: #000"></i>
            </div>
            `;
        },

        popup: (editor, current, self, close) => {
          try {
            setTimeout(() => {
              const name = 'lnk-font-color-picker-icon';
              const target = document.getElementById(name);
              const colorPicInstance = pickrOption('.runColorPic');

              const setEditorStyle = (event) => {
                const color = editorStyleColor.backgroundColor(target, event);
                editorStyleColor.setClass(editor, { color });
                close();
              }

              colorPicInstance
                .on("save", (event) => setEditorStyle(event))
                .on('swatchselect', (event) => setEditorStyle(event))
            }, 100);

            return popupView;
          } catch (error) {
            console.log(error);
          }
        },
        // editor.s.applyStyle(undefined, {className: `font-custom`});
      },

      {
        name: 'T',
        tooltip: '폰트배경컬러',
        // iconURL: '/images/img-upload.svg',
        template () {
          return `
            <div id="lnk-font-bg-color-picker">
               <img src="/images/icons8-font-48.png" />
            </div>
          `;
        },

        popup: (editor, current, self, close) => {
          try {
            setTimeout(() => {
              const name = 'lnk-font-bg-color-picker';
              const target = document.getElementById(name);
              const colorPicInstance = pickrOption('.runColorPic');

              const setEditorStyle = (event) => {
                const color = editorStyleColor.backgroundColor(target, event);
                editorStyleColor.setClass(editor, { backgroundColor: color });
                target.querySelector('img').style.filter = getContrastYIQ(color);
                target.style.background = color;
                close();
              }

              colorPicInstance
                .on("save", (event) => setEditorStyle(event))
                .on('swatchselect', (event) => setEditorStyle(event))

            }, 100);

            return popupView;
          } catch (error) {
            console.log(error);
          }
        },
      },

      '|',

      'hr',
      'eraser',

      '|',

      'left',
      'center',
      'right',
      '|',
      'ul',

      // 'ol',
      // "paragraph",
      // 'lineHeight',

      // '---',

      'spellcheck',
      // 'search',
    ],
  };
};
