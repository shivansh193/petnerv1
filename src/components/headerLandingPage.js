import React from 'react';
import styled from 'styled-components';
import InputAdornment from "@mui/material/InputAdornment";

import landscape from '../assets/images.jpg';
import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavbarOptions = styled.div`
  display: flex;
  gap: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 25px;
  padding: 0 10px;
`;

const LandscapeContainer = styled.div`
  background-image: url(${landscape});
  background-size: cover;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #ffffff;
  padding-left: 100px;
`;

const ButtonContainer = styled(Button)`
  background-color: #333333;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const HeaderLandingPage = () => {
  return (
    <div>
      <HeaderContainer>
        <Logo src="https://via.placeholder.com/150x50" alt="Logo" />
        <NavbarOptions>
          <ButtonContainer>Option 1</ButtonContainer>
          <ButtonContainer>Option 2</ButtonContainer>
          <ButtonContainer>Option 3</ButtonContainer>
        </NavbarOptions>
        <SearchContainer>
          <TextField
            variant="standard"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </SearchContainer>
      </HeaderContainer>
      <LandscapeContainer>
        <div>
          <h1>Welcome to My Site</h1>
          <p>This is the description of my site</p>
          <ButtonContainer>Button 1</ButtonContainer>
          <ButtonContainer>Button 2</ButtonContainer>
        </div>
      </LandscapeContainer>
    </div>
  );
};

export default HeaderLandingPage;
