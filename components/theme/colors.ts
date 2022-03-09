// Color Palette Generator based off equal luminance
// https://grayscale.design/app?lums=96.01,79.97,70.08,40.16,30.01,19.95,12.75,5.81&palettes=%236ab99c,%23b89b69,%23adadad,%237e31cc,%23cf2525,%23c46721,%23d6cf11,%23212ea6,%23171515,%234B0082&filters=0%7C0,0%7C0,0%7C0,0%7C0,0%7C0,0%7C0,0%7C0,0%7C0,0%7C0,0%7C0&names=green,beige,gray,violet,red,orange,yellow,blue,black,indigo&labels=,,,,,,,,,
const black = {
  black_100: "#f6f5f5",
  black_200: "#ebe9e9",
  black_300: "#dfdcdc",
  black_400: "#bab3b3",
  black_500: "#9c9393",
  black_600: "#857a7a",
  black_700: "#6b6262",
  black_800: "#484242",
};

const blue = {
  blue_100: "#f4f5fd",
  blue_200: "#e4e6fa",
  blue_300: "#d6d9f7",
  blue_400: "#a7aeed",
  blue_500: "#828ce6",
  blue_600: "#6571e0",
  blue_700: "#4251d9",
  blue_800: "#2230ab",
};

const beige = {
  beige_100: "#f8f5f0",
  beige_200: "#ede6d9",
  beige_300: "#e2d7c3",
  beige_400: "#c5ae85",
  beige_500: "#af8e55",
  beige_600: "#927645",
  beige_700: "#765f38",
  beige_800: "#4e3f25",
};

const green = {
  green_100: "#eef7f4",
  green_200: "#d6ece4",
  green_300: "#bfe1d5",
  green_400: "#6ab99c",
  green_500: "#4da585",
  green_600: "#40886e",
  green_700: "#346f59",
  green_800: "#244c3d",
};

const gray = {
  gray_100: "#f4f4f4",
  gray_200: "#e5e5e5",
  gray_300: "#d6d6d6",
  gray_400: "#b0b0b0",
  gray_500: "#949494",
  gray_600: "#7c7c7c",
  gray_700: "#626262",
  gray_800: "#414141",
};

const indigo = {
  indigo_100: "#fbf5ff",
  indigo_200: "#f3e3ff",
  indigo_300: "#edd3ff",
  indigo_400: "#d79eff",
  indigo_500: "#c471ff",
  indigo_600: "#ab36ff",
  indigo_700: "#8500e4",
  indigo_800: "#6500ad",
};

const orange = {
  orange_100: "#fcf4ee",
  orange_200: "#f7e2d2",
  orange_300: "#f4d6bf",
  orange_400: "#e7a572",
  orange_500: "#dc7a2f",
  orange_600: "#be6420",
  orange_700: "#9c521a",
  orange_800: "#673611",
};

const red = {
  red_100: "#fdf3f3",
  red_200: "#f9e0e0",
  red_300: "#f6cfcf",
  red_400: "#ee9e9e",
  red_500: "#e67474",
  red_600: "#dd3e3e",
  red_700: "#c32323",
  red_800: "#881818",
};

const violet = {
  violet_100: "#f8f3fc",
  violet_200: "#ede2f8",
  violet_300: "#e3d2f4",
  violet_400: "#c5a1e8",
  violet_500: "#ad7adf",
  violet_600: "#9a5cd8",
  violet_700: "#8940d1",
  violet_800: "#5e2497",
};

const white = {
  white_100: "#fbfbfb",
  white_200: "#f6f6f6",
};

const yellow = {
  yellow_100: "#f9f7b6",
  yellow_200: "#efe937",
  yellow_300: "#e7e012",
  yellow_400: "#bcb60f",
  yellow_500: "#9b960c",
  yellow_600: "#827e0a",
  yellow_700: "#696608",
  yellow_800: "#484606",
};

const colors = {
  ...black,
  ...blue,
  ...beige,
  ...gray,
  ...green,
  ...indigo,
  ...orange,
  ...red,
  ...violet,
  ...white,
  ...yellow,
};

export default colors;
