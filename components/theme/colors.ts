// Color Palette Generator based off equal luminance
// https://grayscale.design/app?lums=92.72,85.96,73.80,58.76,39.22,24.42,15.15,11.44,6.93,4.69&palettes=%236ab99c,%23b89b69,%23adadad,%237e31cc,%23cf2525,%23c46721,%23d6cf11,%23868dcc,%23171515,%234B0082&filters=0%7C0,0%7C0,0%7C0,0%7C0,0%7C0,0%7C0,0%7C0,0%7C0,0%7C0,0%7C0&names=green,beige,gray,violet,red,orange,yellow,blue,black,indigo&labels=,,,,,,,,,
const black = {
  black_50: "rgb(247, 246, 246)",
  black_100: "rgb(240, 238, 238)",
  black_200: "rgb(225, 222, 222)",
  black_300: "rgb(206, 201, 201)",
  black_400: "rgb(174, 166, 166)",
  black_500: "rgb(144, 133, 133)",
  black_600: "rgb(116, 106, 106)",
  black_700: "rgb(102, 93, 93)",
  black_800: "rgb(80, 73, 73)",
  black_900: "rgb(30, 20, 10)",
};

const blue = {
  blue_50: "rgb(246, 246, 251)",
  blue_100: "rgb(237, 238, 247)",
  blue_200: "rgb(220, 222, 240)",
  blue_300: "rgb(196, 200, 230)",
  blue_400: "rgb(159, 165, 215)",
  blue_500: "rgb(122, 130, 199)",
  blue_600: "rgb(92, 101, 186)",
  blue_700: "rgb(76, 86, 179)",
  blue_800: "rgb(59, 67, 140)",
  blue_900: "rgb(49, 56, 117)",
};

const beige = {
  beige_50: "rgb(249, 246, 242)",
  beige_100: "rgb(243, 238, 230)",
  beige_200: "rgb(232, 222, 206)",
  beige_300: "rgb(216, 200, 173)",
  beige_400: "rgb(191, 165, 120)",
  beige_500: "rgb(162, 131, 77)",
  beige_600: "rgb(130, 105, 62)",
  beige_700: "rgb(114, 92, 54)",
  beige_800: "rgb(89, 72, 42)",
  beige_900: "rgb(73, 59, 35)",
};

const green = {
  green_50: "rgb(240, 248, 245)",
  green_100: "rgb(227, 242, 237)",
  green_200: "rgb(200, 229, 218)",
  green_300: "rgb(163, 212, 194)",
  green_400: "rgb(102, 183, 153)",
  green_500: "rgb(70, 150, 121)",
  green_600: "rgb(56, 120, 97)",
  green_700: "rgb(49, 105, 85)",
  green_800: "rgb(39, 82, 66)",
  green_900: "rgb(32, 68, 55)",
};

const gray = {
  gray_50: "rgb(247, 247, 247)",
  gray_100: "rgb(239, 239, 239)",
  gray_200: "rgb(223, 223, 223)",
  gray_300: "rgb(202, 202, 202)",
  gray_400: "rgb(168, 168, 168)",
  gray_500: "rgb(135, 135, 135)",
  gray_600: "rgb(109, 109, 109)",
  gray_700: "rgb(95, 95, 95)",
  gray_800: "rgb(74, 74, 74)",
  gray_900: "rgb(61, 61, 61)",
};

const indigo = {
  indigo_50: "rgb(251, 245, 255)",
  indigo_100: "rgb(246, 234, 255)",
  indigo_200: "rgb(238, 215, 255)",
  indigo_300: "rgb(226, 186, 255)",
  indigo_400: "rgb(207, 140, 255)",
  indigo_500: "rgb(185, 87, 255)",
  indigo_600: "rgb(158, 23, 255)",
  indigo_700: "rgb(138, 0, 236)",
  indigo_800: "rgb(110, 0, 188)",
  indigo_900: "rgb(92, 0, 157)",
};

const orange = {
  orange_50: "rgb(253, 246, 241)",
  orange_100: "rgb(250, 236, 225)",
  orange_200: "rgb(245, 218, 197)",
  orange_300: "rgb(239, 193, 158)",
  orange_400: "rgb(228, 151, 93)",
  orange_500: "rgb(207, 109, 35)",
  orange_600: "rgb(166, 88, 28)",
  orange_700: "rgb(146, 77, 25)",
  orange_800: "rgb(114, 60, 19)",
  orange_900: "rgb(94, 50, 16)",
};

const red = {
  red_50: "rgb(253, 245, 245)",
  red_100: "rgb(251, 235, 235)",
  red_200: "rgb(248, 216, 216)",
  red_300: "rgb(243, 188, 188)",
  red_400: "rgb(235, 143, 143)",
  red_500: "rgb(226, 91, 91)",
  red_600: "rgb(210, 37, 37)",
  red_700: "rgb(184, 33, 33)",
  red_800: "rgb(146, 26, 26)",
  red_900: "rgb(121, 22, 22)",
};

const violet = {
  violet_50: "rgb(249, 245, 253)",
  violet_100: "rgb(243, 236, 250)",
  violet_200: "rgb(232, 218, 246)",
  violet_300: "rgb(216, 192, 240)",
  violet_400: "rgb(191, 152, 230)",
  violet_500: "rgb(165, 110, 220)",
  violet_600: "rgb(142, 72, 211)",
  violet_700: "rgb(128, 51, 206)",
  violet_800: "rgb(101, 39, 163)",
  violet_900: "rgb(84, 32, 135)",
};

const white = {
  white_100: "#fbfbfb",
  white_200: "#f6f6f6",
};

const yellow = {
  yellow_50: "rgb(251, 249, 202)",
  yellow_100: "rgb(246, 243, 145)",
  yellow_200: "rgb(236, 229, 19)",
  yellow_300: "rgb(213, 207, 17)",
  yellow_400: "rgb(178, 173, 14)",
  yellow_500: "rgb(144, 139, 11)",
  yellow_600: "rgb(115, 112, 9)",
  yellow_700: "rgb(101, 98, 8)",
  yellow_800: "rgb(79, 77, 6)",
  yellow_900: "rgb(65, 63, 5)",
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
