import React from "react";
import styled from "styled-components";
import InputProps from "./types";

const TextInput = styled.input``;
const Input = ({ onChange, name }: InputProps) => {
  const handleChange = (e: { target: { value: string } }) => {
    onChange({ [name]: e.target.value });
  };
  return (
    <>
      <TextInput id={name} onChange={handleChange} />
    </>
  );
};

Input.defaultProps = {
  onChange: () => {},
};

export default Input;
