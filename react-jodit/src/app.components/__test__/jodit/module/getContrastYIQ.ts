export const getContrastYIQ = (hexcolor) => {
  hexcolor = hexcolor.replace('#', '');
  let r = parseInt(hexcolor.substr(0, 2), 16);
  let g = parseInt(hexcolor.substr(2, 2), 16);
  let b = parseInt(hexcolor.substr(4, 2), 16);
  let yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128
    ? 'brightness(0) saturate(100%) invert(0%) sepia(3%) saturate(3915%) hue-rotate(187deg) brightness(93%) contrast(102%)'
    : 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(1%) hue-rotate(302deg) brightness(104%) contrast(101%)';
}