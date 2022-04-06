import React from "react";
import styled, { keyframes } from "styled-components";
import AnimatedLogoProps from "./types";
import Logo from "../../public/assets/branding/animated-logo.svg";

const CodeLeft = keyframes`
  50% {
    transform: translateX(190px);
  }

  100% {
    transform: translateX(0%);
  }
`;

const CodeRight = keyframes`
  50% {
    transform: translateX(=190px);
  }

  100% {
    transform: translateX(0%);
  }
`;

const LogoLeftAnimation = keyframes`
  0% {
      transform: translateX(-100%);
  }

  50% {
    transform: translateX(-100%);
  }

  100% {
      transform: translateX(0%);
  }
`;

const LettersRightAnimation = keyframes`
  0% {
      transform: translateX(100%);
  }

  50% {
    transform: translateX(100%);
  }

  100% {
      transform: translateX(0%);
  }
`;

const Container = styled.div`
  height: fit-content;
  width: 400px;
`;
const StyledLogo = styled(Logo)`
  path.M,
  path.Left-Caret {
    transform: translateX(190px);
    animation: ${CodeLeft} 3s ease-out forwards;
  }

  path.M2,
  path.Closing-Bracket,
  path.Right-Caret {
    transform: translateX(-190px);
    animation: ${CodeRight} 3s ease-out forwards;
  }

  path.I,
  path.K,
  path.E {
    animation: ${LogoLeftAnimation} 3s ease-out forwards;
  }

  path.C,
  path.G,
  path.R,
  path.A,
  path.T,
  path.H {
    animation: ${LettersRightAnimation} 3s ease-out forwards;
  }
`;
const AnimatedLogo = (props: AnimatedLogoProps) => (
  <Container>
    <StyledLogo />
  </Container>
);

export default AnimatedLogo;
