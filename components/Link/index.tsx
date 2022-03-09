import React from "react";
import styled, { css } from "styled-components";
import NextLink from "next/link";

import { LinkProps } from "./types";

const BaseLinkStyles = css<LinkProps>`
  color: ${({ theme }) => theme.palette.info.main};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fontFamilies.sans_2};
  text-decoration: none;

  ${({ showUnderline }) =>
    showUnderline &&
    css`
      text-decoration: underline;
    `}

  &:hover {
    color: ${({ theme }) => theme.palette.info.hover};
    text-decoration: underline;
  }

  &:active,
  &:visited {
    color: ${({ theme }) => theme.palette.info.active};
  }
`;

const ExternalLink = styled.a<LinkProps>`
  ${BaseLinkStyles};
`;

const InternalLink = styled.a<LinkProps>`
  ${BaseLinkStyles};
`;

const Link = ({
  children,
  external = false,
  href = "",
  className = "",
  showUnderline = false,
}: LinkProps) => {
  if (external) {
    return (
      <ExternalLink
        showUnderline={showUnderline}
        className={className}
        href={href}
        target="_blank"
      >
        {children}
      </ExternalLink>
    );
  }

  return (
    <NextLink href={href} passHref>
      <InternalLink className={className} showUnderline={showUnderline}>
        {children}
      </InternalLink>
    </NextLink>
  );
};

export default Link;
