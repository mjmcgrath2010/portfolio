import React from "react";
import styled from "styled-components";
import { GridProps, GridItemProps } from "./types";

const GridItemContainer = styled.div<GridItemProps>`
  grid-column: ${({ desktop, mobile, tablet }) =>
    `span ${desktop || tablet || mobile}`};
  align-self: ${({ alignSelf }) => alignSelf};
  justify-self: ${({ justifySelf }) => justifySelf};
`;

const GridItem = ({
  alignSelf,
  children,
  className,
  desktop,
  mobile,
  tablet,
  justifySelf,
}: GridItemProps) => (
  <GridItemContainer
    alignSelf={alignSelf}
    className={className}
    desktop={desktop}
    mobile={mobile}
    tablet={tablet}
    justifySelf={justifySelf}
  >
    {children}
  </GridItemContainer>
);

GridItem.defaultProps = {
  alignSelf: "stretch",
  className: "",
  desktop: undefined,
  mobile: 1,
  tablet: undefined,
  justifySelf: "stretch",
};

const GridContainer = styled.div<GridProps>`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  grid-template-rows: auto;
  grid-template-columns: ${({ gridColumns }) => `repeat(${gridColumns}, 1fr)`};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-items: ${({ justifyItems }) => justifyItems};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Grid = ({
  alignContent,
  alignItems,
  children,
  className,
  gridColumns,
  justifyContent,
  justifyItems,
}: GridProps) => (
  <GridContainer
    alignContent={alignContent}
    alignItems={alignItems}
    className={className}
    gridColumns={gridColumns}
    justifyContent={justifyContent}
    justifyItems={justifyItems}
  >
    {children}
  </GridContainer>
);

Grid.defaultProps = {
  alignContent: "start",
  alignItems: "center",
  className: "",
  gridColumns: 12,
  justifyContent: "space-between",
  justifyItems: "start",
};

Grid.Item = GridItem;

export default Grid;
