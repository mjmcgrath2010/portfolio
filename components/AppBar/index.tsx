import React from "react";
import AppBarProps from "./types";
import styled from "styled-components";

const AppBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white_200};
  box-shadow: ${({ theme }) => theme.shadows.main};
  z-index: 1000;
`;

const Pusher = styled.div`
  margin-top: 70px;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  padding: ${({ theme }) => `0 ${theme.spacing.lg}`};
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  height: 100%;
`;

const AppBar = ({ children, className }: AppBarProps) => (
  <>
    <AppBarContainer className={className}>
      <ContentContainer>{children}</ContentContainer>
    </AppBarContainer>
    <Pusher />
  </>
);

export default AppBar;
