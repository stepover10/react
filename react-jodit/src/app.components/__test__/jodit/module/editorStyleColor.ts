export const editorStyleColor = {

  className: 'font-custom',

  backgroundColor (target, event) {
    const color = event.toHEXA().toString();
    target.style.backgroundColor = color;
    return color;
  },

  setClass (editor, selectColorStyle) {
    editor.s.applyStyle({
      ...selectColorStyle
    });
  }
}