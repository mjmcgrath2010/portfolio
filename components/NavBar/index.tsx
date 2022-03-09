import React, { MouseEvent } from "react";
import styled, { css } from "styled-components";
import NavBarProps, { LogoProps } from "./types";
import AppBar from "../AppBar";
import Logo from "../../public/assets/branding/logo.svg";
import Link from "../Link";
import useScroll from "../../hooks/useScroll";

interface RouteProps {
  href: string;
  external?: boolean;
  name: string;
}

interface NavRoutesProps {
  routes: [RouteProps];
}

interface Scrolled {
  isScrolled?: boolean | undefined;
}
const Container = styled(AppBar)<Scrolled>`
  ${({ isScrolled }) =>
    !isScrolled &&
    css`
      background: transparent;
      box-shadow: none;
    `}
`;

const StyledLogo = styled(Logo)<Scrolled>`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.main};
  width: 200px;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.hover};
  }

  ${({ isScrolled }) =>
    !isScrolled &&
    css`
      color: ${({ theme }) => theme.palette.text.light};
    `}
`;
const NavBarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

const NavBarLogoContainer = styled.div`
  width: 250px;
  flex: 1;
  justify-self: flex-start;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.secondary.main};
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.hover};
  }

  &:visited {
    color: ${({ theme }) => theme.palette.secondary.active};
  }
`;

const NavRoutesContainer = styled.div<Scrolled>`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ isScrolled }) =>
    !isScrolled &&
    css`
      ${StyledLink} {
        color: ${({ theme }) => theme.palette.text.light};
        &:hover {
          color: ${({ theme }) => theme.palette.primary.light};
        }

        &:visited {
          color: ${({ theme }) => theme.palette.primary.light};
        }
      }
    `}
`;

const NavRoutes = ({ routes }: NavRoutesProps) => {
  const { thresholdMet } = useScroll(70);
  return (
    <NavRoutesContainer isScrolled={thresholdMet}>
      {routes.map(({ href, external, name }: RouteProps) => (
        <StyledLink key={name} href={href} external={external}>
          {name}
        </StyledLink>
      ))}
    </NavRoutesContainer>
  );
};

NavRoutes.defaultProps = {
  routes: [
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/projects",
      name: "Projects",
    },
    {
      href: "/blog",
      name: "Blog",
    },
    {
      href: "/components/index.html",
      name: "Components",
      external: true,
    },
  ],
};

const NavBarLogo = ({ className }: LogoProps) => {
  const { thresholdMet } = useScroll(70);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <NavBarLogoContainer className={className}>
      <StyledLogo
        isScrolled={thresholdMet}
        role="button"
        onClick={handleClick}
      />
    </NavBarLogoContainer>
  );
};

const NavBar = ({ children, className }: NavBarProps) => {
  const { thresholdMet } = useScroll(70);

  return (
    <Container isScrolled={thresholdMet} className={className}>
      <NavBarContainer>{children}</NavBarContainer>
    </Container>
  );
};

NavBar.Logo = NavBarLogo;
NavBar.Routes = NavRoutes;

NavBar.defaultProps = {
  className: "",
};

export default NavBar;
