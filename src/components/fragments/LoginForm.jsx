import { useEffect, useRef, useState } from "react";
import Button from "../elements/Button";
import InputForm from "../elements/Input";
import { login } from "../../services/auth.service";

const LoginForm = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {loginFailed && <p className="text-red-600 text-center">{loginFailed}</p>}
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="John Doe"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="******"
      />
      <Button type="submit" className="bg-blue-600 w-full mb-2">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
