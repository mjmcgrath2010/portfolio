import React from "react";
import styled from "styled-components";
import * as RadixCheckbox from "@radix-ui/react-checkbox";

import CheckboxProps from "./types";

const Container = styled(RadixCheckbox.Root)``;
const Indicator = styled(RadixCheckbox.Indicator)``;

const Checkbox = (props: CheckboxProps) => (
  <Container>
    <Indicator />
  </Container>
);

Checkbox.defaultProps = {};

export default Checkbox;
