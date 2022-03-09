import { ReactElement } from "react";
export interface GridProps {
  alignContent:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-around"
    | "space-between"
    | "space-evenly";
  alignItems: "start" | "end" | "center" | "stretch";
  children?: ReactElement | ReactElement[] | string;
  className: string;
  gridColumns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  justifyContent:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-around"
    | "space-between"
    | "space-evenly";
  justifyItems: "start" | "end" | "center" | "stretch";
}

export interface GridItemProps {
  alignSelf: "start" | "end" | "center" | "stretch";
  children?: ReactElement | ReactElement[] | string;
  className: string;
  desktop: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  mobile: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  tablet: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  justifySelf: "start" | "end" | "center" | "stretch";
}
