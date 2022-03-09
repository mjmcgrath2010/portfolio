import React from "react";
import styled from "styled-components";
import ButtonProps from "./types";

const StyledButton = styled.button<ButtonProps | HTMLButtonElement>`
  ${({ theme, color }) => theme.variants.button[color]};
`;

const Button = ({ children, color, onClick, variant }: ButtonProps) => (
  <StyledButton onClick={onClick} color={color} variant={variant}>
    {children}
  </StyledButton>
);

Button.defaultProps = {
  children: "",
  color: "primary",
  variant: "outlined",
};

export default Button;
