import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 20px;
  height: 80px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.a`
  font-weight: bold;
  font-size: 24px;
  color: #333;
  text-decoration: none;
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.a`
  margin-right: 20px;
  font-size: 18px;
  color: #333;
  text-decoration: none;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #333;
    border: 1px solid #333;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo href="#">Brand Logo</Logo>
      <OptionsContainer>
        <Option href="#">Option 1</Option>
        <Option href="#">Option 2</Option>
        <Option href="#">Option 3</Option>
      </OptionsContainer>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search..." />
        <SearchButton>Search</SearchButton>
      </SearchContainer>
    </NavbarContainer>
  );
};

export default Navbar;
