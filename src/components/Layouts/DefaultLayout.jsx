'use client'

import { Drawer, IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Navigation } from "../Navigation";

export const DefaultLayout = ({ children }) => {
  const [isShowSideMenu, setIsShowSideMenu] = useState(false);

  return (
    <Wrapper>
      <Drawer
        open={isShowSideMenu}
        onClose={() => setIsShowSideMenu(false)}
      >
        <Navigation></Navigation>
      </Drawer>
      <Header>
        <IconButton
          onClick={() => setIsShowSideMenu(true)}
        >
          <MenuIcon></MenuIcon>
        </IconButton>
      </Header>
      <Content>
      { children }
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  width: 100%;
  height: 100vh;
`;

const Header = styled('header')`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(0, 2)};
`;

const Content = styled('section')`
  padding: ${({ theme }) => theme.spacing(0, 2)};
`;
