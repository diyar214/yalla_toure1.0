import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import BackgroundBoxes from "../components/BackgroundBoxes/BackgroundBoxes";

function Login() {
  return (
    <div className="login">
      <LoginForm />

      <BackgroundBoxes />
    </div>
  );
}

export default Login;
