import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const SignupWrapper = styled.form`
  width: calc(80%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.15);
  @media screen and (min-width: 768px) {
    width: calc(40%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(80%);
`;

const Title = styled.p`
  margin: 20px 0;
  margin-top: 40px;
  font: bold 40px "ariral";
  background: linear-gradient(45deg, #4bcec0, #4793ef);
  -webkit-background-clip: text;
  color: transparent;
  &.subtitle {
    font: bold 20px "arial";
    margin: 0;
    margin-bottom: 20px;
    color: black;
  }
  @media screen and (min-width: 768px) {
    font: bold 60px "ariral";
    margin-top: 40px;
  }
`;

const Label = styled.label`
  font: bold 14px "arial";
  margin: 5px 10px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

const Input = styled.input`
  padding-left: 10px;
  height: 30px;
  margin: 0;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`;

const ErrorText = styled.div`
  color: red;
  margin: 10px 0;
  font-size: 14px;
  font-weight: bold;
`;

const Button = styled.button`
  &.signup {
    width: calc(20%);
    height: 30px;
    font: bold 14px "arial";
    color: white;
    background: linear-gradient(45deg, #4bcec0, #4793ef); // 그라디언트 적용
    border: none;
    border-radius: 5px;
    margin: 10px 0;
    margin-top: 20px;
    &:hover {
      cursor: pointer;
      background: #c3c2c2;
    }
    @media screen and (min-width: 768px) {
      height: 35px;
      width: calc(15%);
      font: bold 15px "arial";
    }
  }
  &.back {
    border: none;
    background: none;
    font: bold 13px "arial";
    background: linear-gradient(45deg, #4bcec0, #4793ef);
    -webkit-background-clip: text;
    color: transparent;
    margin: 20px;
    &:hover {
      color: gray;
    }
    @media screen and (min-width: 768px) {
      font: bold 15px "arial";
    }
  }
`;

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signup = () => {
    if (password === password2) {
      setError(null);
      axios
        .post("https://bike-web-back.vercel.app/signup", {
          email,
          password,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      setError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }
  };

  return (
    <Container>
      <SignupWrapper action="/signup" method="post">
        <Title>QUADSTAR</Title>
        <Title className="subtitle">회원가입</Title>
        <Wrapper>
          <Label htmlFor="email">이메일</Label>
          <Input
            name="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요"
          />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            name="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
          />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="password2">비밀번호 확인</Label>
          <Input
            name="password2"
            type="password"
            required
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="비밀번호를 다시 입력해주세요"
          />
        </Wrapper>
        {error && <ErrorText>{error}</ErrorText>}
        <Button type="button" onClick={signup} className="signup">
          회원가입
        </Button>
        <Button type="button" onClick={() => navigate("/login")} className="back">
          뒤로
        </Button>
      </SignupWrapper>
    </Container>
  );
};

export default Signup;
