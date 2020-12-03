import React from "react";
import "./sign-in-and-sign-up.scss";
import SignIn from "../../components/Signin/SignIn";
import SignUp from "../../components/Signup/SignUp";
export const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
