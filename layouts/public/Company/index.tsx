import React from "react";
import styled from "styled-components";

import { AppLayout } from "@layouts";

import CompanyProps from "./types";

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  min-height: calc(65vh);
`;

const Company = ({ children }: CompanyProps) => (
  <AppLayout>
    <Container>{children}</Container>
  </AppLayout>
);

Company.defaultProps = {};

export default Company;
