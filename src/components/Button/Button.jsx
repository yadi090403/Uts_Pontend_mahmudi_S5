import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
 background-color: #118ab2;
 color: #fff;
 border: none;
 border-radius: 5px;
 padding: 12px 24px;
 font-size: 16px;
 font-weight: bold;
 cursor: pointer;
 transition: background-color 0.3s ease;

 &:hover {
  background-color: #64748b;
 }

 &:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
 }
`;

function Button(props) {
 const { children } = props;

 return <StyledButton>{children}</StyledButton>;
}

export default Button;
