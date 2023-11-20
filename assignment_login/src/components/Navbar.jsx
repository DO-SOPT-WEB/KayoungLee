// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarBrand href="#">✨🤖가영쓰 각성🤖✨</NavbarBrand>
        <NavbarLogin>
          <a href="/login">login</a>
        </NavbarLogin>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  border-bottom: 1px solid #dee2e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
`;

const NavbarBrand = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
`;

const NavbarLogin = styled.span`
  a {
    text-decoration: none;
    color: #000;
    margin-right: 1rem;
  }
`;

export default Navbar;
