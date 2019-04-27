import React, { useState } from "react";
import styled from "styled-components";

const AddTransaction = styled.button`
  width: 20%;
  height: 2rem;
  transition: all 0.25s;

  :hover {
    width: 30%;
  }
`;

const Button = () => <AddTransaction>Add transaction</AddTransaction>;

export default Button;
