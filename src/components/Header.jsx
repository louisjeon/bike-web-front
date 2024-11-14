import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import Menu from "./Menu";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.img`
  padding: 0;
  margin: 0;
  margin-left: 20px;
  height: 60px;
  width: 80px;
  margin-top: 5px;
`;

// 햄버거 아이콘 스타일
const HamburgerIcon = styled(GiHamburgerMenu)`
  display: none;
  font-size: 24px;
  margin-right: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <HeaderWrapper>
      <a href="/">
        <Logo src={logo} />
      </a>
      {/* 768px 이하에서만 햄버거 아이콘이 표시 */}
      <HamburgerIcon onClick={toggleMenu} />
      <Menu isOpen={menuOpen} />
    </HeaderWrapper>
  );
};

export default Header;
