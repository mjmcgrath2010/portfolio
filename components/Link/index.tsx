import React from "react";
import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import { LinkProps, LinkElementProps } from "./types";

const BaseLinkStyles = css<LinkElementProps>`
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

const StyledRouterLink = styled.a.attrs(({ to }: { to: string }) => ({
  href: to,
}))`
  ${BaseLinkStyles};
`;

const ExternalLink = styled.a.attrs(({ to }: { to: string }) => ({
  href: to,
}))`
  ${BaseLinkStyles};
`;

const Link = ({
  children,
  external,
  to,
  className,
  showUnderline,
}: LinkProps) => {
  if (external) {
    return (
      <ExternalLink
        showUnderline={showUnderline}
        className={className}
        to={to}
        target="_blank"
      >
        {children}
      </ExternalLink>
    );
  }

  return (
    <StyledRouterLink
      showUnderline={showUnderline}
      to={to}
      className={className}
    >
      {children}
    </StyledRouterLink>
  );
};

Link.defaultProps = {
  className: "",
  to: "/",
  external: false,
  showUnderline: false,
};

export default Link;
