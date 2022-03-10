import React from "react";
import Link from "../components/Link";
import { LinkProps } from "../components/Link/types";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {},
  parameters: {},
};

export const InternalLink = ({ ...rest }: LinkProps) => <Link {...rest} />;

InternalLink.args = {
  showUnderline: false,
  children: "Internal Link",
  to: "/",
};

InternalLink.storyName = "Link - Internal";

export const ExternalLink = ({ ...rest }: LinkProps) => <Link {...rest} />;

ExternalLink.args = {
  showUnderline: true,
  children: "External Link to Google",
  to: "https://google.com",
  external: true,
};

ExternalLink.storyName = "Link - ExternalLink";
