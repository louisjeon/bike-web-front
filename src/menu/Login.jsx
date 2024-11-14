import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`
const LoginWrapper = styled.form`
  width: calc(80%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
  @media screen and (min-width : 768px) {
    width: calc(40%) ;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(80%);
`

const Title = styled.p`
  margin: 20px 0;
  margin-top: 40px;
  font: bold 40px 'ariral';
  background: linear-gradient(45deg, #4bcec0, #4793ef);
  -webkit-background-clip: text;
  color: transparent;
  &.subtitle{
    font: bold 20px 'arial';
    margin: 0;
    margin-bottom: 20px;
    color: black;
  }
  @media screen and (min-width : 768px) {
    font: bold 60px 'ariral';
  }
`

const Label = styled.label`
  font: bold 14px 'airal';
  margin: 5px 10px;
  @media screen and (min-width : 768px) {
    font-size: 15px;
  }
`

const Input = styled.input`
  padding-left: 10px;
  height: 30px;
  margin: 0;
  margin-bottom: 20px;
  @media screen and (min-width : 768px) {
    height: 40px;
  }
`
const Register = styled.div`
  display: flex;
  margin-bottom: 20px;
`
const P = styled.p`
  font: 500 13px 'arial';
  @media screen and (min-width : 768px) {
      font: 500 15px 'arial';
    }
`

const Button = styled.button`
  &.login{
    width: calc(20%);
    height: 30px;
    font: bold 14px 'arial';
    color: white;
    background: linear-gradient(45deg, #4bcec0, #4793ef); // 그라디언트 적용
    border: none;
    border-radius: 5px;
    margin: 10px 0;
    margin-top: 40px;
    &:hover{
      cursor: pointer;
      background: #c3c2c2
    }
    @media screen and (min-width : 768px) {
      height: 35px;
      width: calc(15%);
      font: bold 15px 'arial';
    }
  }
  &.register{
    border: none;
    background: none;
    font: bold 13px 'arial';
    &:hover{
      color: gray;
    }
    @media screen and (min-width : 768px) {
      font: bold 15px 'arial';
    }
  }
`

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const login = () => {
    axios
      .post("https://bike-web-back.vercel.app/login", {
        email,
        password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <LoginWrapper action="/login" method="post">
        <Title>QUADSTAR</Title>
        <Title className="subtitle">로그인</Title>
        <Wrapper>
          <Label for="email">이메일</Label>
          <Input
            name="email"
            type="email"
            required
            onChange={(val) => {
              setEmail(val);
            }} placeholder="이메일을 입력해주세요"
          />
        </Wrapper>
        <Wrapper>
        <Label for="password">비밀번호</Label>
          <Input
            name="password"
            type="password"
            required
            onChange={(val) => setPassword(val)}
            placeholder="비밀번호를 입력해주세요"
          />
        </Wrapper>
        <Button type="submit" onClick={login} className="login">
          로그인
        </Button>
        <Register>
          <P>아직 회원이 아니신가요?</P>
          <Button type="button" onClick={() => navigate("/signup")} className="register">
            회원가입
          </Button>
        </Register>
      </LoginWrapper>
    </Container>
  );
};

export default Login;
