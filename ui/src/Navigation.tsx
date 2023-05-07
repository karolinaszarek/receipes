import React from 'react';
import styled from "styled-components";

const Nav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const A = styled.a`
  margin: 5px;
  color: grey;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const Navigation = () => {
    return (
        <Nav>
            <A>Search a receipt</A>
            <A>Add a receipt</A>
        </Nav>
    );
};
