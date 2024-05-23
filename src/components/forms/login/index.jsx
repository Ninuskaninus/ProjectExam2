import React, {useState, useEffect} from "react";
import { FormBtnContainer, Form, FormItem, ErrorMessage } from "../index.styles"
import Icons from "../../../images";
import FormBtn from "../../buttons/formBtn";
import login from "../../../js/post/login";


export default function LoginForm() {
    useEffect(() => {
    document.title = "Holidaze | Login";
    }, []);
  
  const [loginForm, setLogin] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginForm);
    setError("");

    if (loginForm.email === "" || loginForm.password === "") {
      setError("Please fill in all fields");
      const passwordLabel = document.getElementById("passwordLabel");
      passwordLabel.classList.add("error");
      const emailLabel = document.getElementById("emailLabel");
      emailLabel.classList.add("error");
      return;
    }

    if (loginForm.password.length < 8) {
      setError("Password must be at least 6 characters long");
      const passwordLabel = document.getElementById("passwordLabel");
      passwordLabel.classList.add("error");

      return;
    }

    if (!loginForm.email.includes("@")) {
      setError("Please enter a valid email address");
      const emailLabel = document.getElementById("emailLabel");
      emailLabel.classList.add("error");
      return;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  return (
    <Form onKeyDown={handleKeyPress}>
      <FormItem>
        {error ? <Icons.EmailError /> : <Icons.Mail />}
        <label id="emailLabel" htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e) => setLogin({ ...loginForm, email: e.target.value })}
        />
      </FormItem>
      <FormItem>
        {error ? <Icons.PasswordError /> : <Icons.Password />}
        <label id="passwordLabel" htmlFor="password">Password</label>
        <input
          id="password"
          onChange={(e) => setLogin({ ...loginForm, password: e.target.value })}
          type="password" />
      </FormItem>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormBtnContainer>
        <FormBtn id="loginBtn" onClick={handleLogin} Text="Log in" />
      </FormBtnContainer>
    </Form>
  );
}