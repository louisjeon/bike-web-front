import React from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  flex: 1;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* 토글 표시 */
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    right: 0;
    background: white;
    width: 100%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 99;
  }

  a {
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin: 10px 0;
  }

  a:link,
  a:visited {
    color: inherit;
  }

  a:hover {
    background: linear-gradient(45deg, #4bcec0, #4793ef);
    -webkit-background-clip: text;
    color: transparent; 
    border-image: linear-gradient(45deg, #4bcec0, #4793ef) 1; // 그라디언트를 보더에 적용
  }

  h5{
    margin: 5px 0;
  }

`;

const Menu = ({ isOpen }) => {
  return (
    <MenuWrapper isOpen={isOpen}>
      <a href="/about">
        <h5>회사 소개</h5>
      </a>
      <a href="/products">
        <h5>제품 소개</h5>
      </a>
      <a href="/stores">
        <h5>대여점</h5>
      </a>
      <a href="/news">
        <h5>뉴스 및 이벤트</h5>
      </a>
      <a href="/support">
        <h5>고객 지원</h5>
      </a>
      <a href="/login">
        <h5>로그인/회원가입</h5>
      </a>
    </MenuWrapper>
  );
};

export default Menu;
