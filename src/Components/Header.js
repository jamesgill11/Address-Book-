import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  h1 {
    background: black;
    color: white;
    padding: 5px;
    margin: 5px;
    text-align: center;
  }
`;

export const Header = () => {
  return (
    <Styles>
      <div>
        <h1>Address Book</h1>
      </div>
    </Styles>
  );
};
