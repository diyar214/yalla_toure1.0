import React from "react";
import BackgroundBoxes from "../components/BackgroundBoxes/BackgroundBoxes";
import RegisterForm from "../components/RegisterForm/RegisterForm";

function Register() {
  return (
    <div className="register">
      <RegisterForm />

      <BackgroundBoxes />
    </div>
  );
}

export default Register;
