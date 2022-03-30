import React from "react";
import styled from "styled-components";
import { ElementProps } from "./types";

const Typography = styled.span.attrs(({ as }: any) => ({ as }))<any>`
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 24;
  }
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
  }
`;

const Heading = styled.span.attrs(({ as }: any) => ({ as }))<any>``;

const NumberedList = styled.ol``;

const BulletedList = styled.ul``;

const ListItem = styled.li``;

const BlockQuote = styled.blockquote``;

// eslint-disable-next-line react/prop-types
const Element = ({ attributes, children, element: { type } }: ElementProps) => {
  switch (type) {
    case "block-quote":
      return <BlockQuote {...attributes}>{children}</BlockQuote>;
    case "heading-one":
      return (
        <Heading as="h1" {...attributes}>
          {children}
        </Heading>
      );
    case "heading-two":
      return (
        <Heading as="h2" {...attributes}>
          {children}
        </Heading>
      );
    case "heading-three":
      return (
        <Heading as="h3" {...attributes}>
          {children}
        </Heading>
      );
    case "bulleted-list":
      return <BulletedList {...attributes}>{children}</BulletedList>;
    case "numbered-list":
      return <NumberedList {...attributes}>{children}</NumberedList>;
    case "list-item":
      return <ListItem {...attributes}>{children}</ListItem>;
    case "paragraph":
      return (
        <Typography as="p" {...attributes}>
          {children}
        </Typography>
      );
    default:
      return (
        <Typography as="div" {...attributes}>
          {children}
        </Typography>
      );
  }
};

export default Element;
