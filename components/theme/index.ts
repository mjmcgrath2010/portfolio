import { DefaultTheme } from "styled-components";

import animations from "./animations";
import colors from "./colors";
import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";
import text from "./text";
import variants from "./variants";

const theme: DefaultTheme = {
  ...typography,
  animations,
  borderRadius: "5px",
  colors,
  palette,
  shadows: {
    light: "hsl(0deg 0% 27% / 10%) 2px 3px 5px",
    main: "hsl(0deg 0% 27% / 15%) 2px 3px 5px",
  },
  spacing,
  text,
  variants,
};

export default theme;
