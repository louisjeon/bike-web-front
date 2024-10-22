const Signup = () => {
  if (password === password2) {
    setError(null);
    axios
      .post("http://localhost:4000/signup", {
        email,
        password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  } else {
    setError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
  }

  return (
    <>
      <form action="/signup" method="post">
        <div>
          이메일
          <input
            name="email"
            type="email"
            required
            onChange={(val) => {
              setEmail(val);
            }}
          />
        </div>
        <div>
          비밀번호
          <input
            name="password"
            type="password"
            required
            onChange={(val) => setPassword(val)}
          />
        </div>
        <div>
          비밀번호확인
          <input
            name="password"
            type="password"
            required
            onChange={(val) => setPassword2(val)}
          />
        </div>
        <button type="button" onClick={() => navigate("/login")}>
          뒤로
        </button>
        <button type="button" onClick={signup}>
          회원가입
        </button>
        <div style={{ color: "red" }}>{error}</div>
      </form>
    </>
  );
};

export default Signup;
