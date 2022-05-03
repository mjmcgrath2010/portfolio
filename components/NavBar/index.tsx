import React from "react";
import styled, { css } from "styled-components";
import NextLink from "next/link";
import NavBarProps, { LogoProps } from "./types";
import AppBar from "../AppBar";
import Logo from "../../public/assets/branding/logo.svg";
import Link from "../Link";
import useScroll from "../../client/hooks/useScroll";
import useMediaQuery from "../../client/hooks/useMediaQuery";

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
  desktop?: boolean | undefined;
  tablet?: boolean | undefined;
  mobile?: boolean | undefined;
}
const Container = styled(AppBar)<Scrolled>`
  ${({ isScrolled }) =>
    !isScrolled &&
    css`
      background: transparent;
      box-shadow: none;
    `}
`;

const StyledLogo = styled(Logo)`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.text.dark};
  width: 200px;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }

  ${({ mobile }) =>
    mobile &&
    css`
      width: 100%;
    `}
`;

const NavBarContainer = styled.div<Scrolled>`
  width: 100%;
  height: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

const NavBarLogoContainer = styled.div<Scrolled>`
  width: 250px;
  flex: 1;
  justify-self: flex-start;

  ${({ isScrolled }) =>
    !isScrolled &&
    css`
      ${StyledLogo} {
        color: ${({ theme }) => theme.palette.text.light};

        &:visited {
          color: ${({ theme }) => theme.palette.info.light};
        }

        &:hover {
          color: ${({ theme }) => theme.palette.info.light};
        }
      }
    `}

  ${({ mobile, tablet }) =>
    (mobile || tablet) &&
    css`
      width: 100%;
      display: flex;
      justify-content: center;
    `}
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.dark};

  &:visited {
    color: ${({ theme }) => theme.palette.info.dark};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: underline;
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

        &:visited {
          color: ${({ theme }) => theme.palette.info.light};
        }

        &:hover {
          color: ${({ theme }) => theme.palette.primary.light};
        }
      }
    `}

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }

  ${({ mobile }) =>
    mobile &&
    css`
      display: none;
    `}
`;

const NavRoutes = ({ routes }: NavRoutesProps) => {
  const { thresholdMet } = useScroll(70);
  const queries = useMediaQuery({});
  return (
    <NavRoutesContainer {...queries} isScrolled={thresholdMet}>
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

const NavLogo = React.forwardRef((props: Scrolled, ref) => (
  <StyledLogo href={ref} {...props} />
));

NavLogo.displayName = "NavLogo";

const NavBarLogo = ({ className }: LogoProps) => {
  const { thresholdMet } = useScroll(70);
  const queries = useMediaQuery({});
  return (
    <NavBarLogoContainer
      {...queries}
      isScrolled={thresholdMet}
      className={className}
    >
      <NextLink href="/" passHref>
        <NavLogo />
      </NextLink>
    </NavBarLogoContainer>
  );
};

const NavBar = ({ children, className }: NavBarProps) => {
  const { thresholdMet } = useScroll(70);
  const queries = useMediaQuery({});

  return (
    <Container {...queries} isScrolled={thresholdMet} className={className}>
      <NavBarContainer {...queries}>{children}</NavBarContainer>
    </Container>
  );
};

NavBar.Logo = NavBarLogo;
NavBar.Routes = NavRoutes;

NavBar.defaultProps = {
  className: "",
};

export default NavBar;
