import React from "react";
import styled from "styled-components";

const Transakce = styled.div`
  width: 40%;
  height: 3rem;
  border: 1px solid;
  margin-top: 0.5rem;
  background: #a4a4a4;
  transition: all 0.25s;
  font-size: 1.1rem;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  :hover {
    background: #dfdfdf;
    transform: scale(1.02, 1);
  }
`;

const Transaction = ({ valueProp, currency }) => (
  <Transakce>
    <div>{valueProp}</div>
    <div>{currency}</div>
  </Transakce>
);

export default Transaction;
