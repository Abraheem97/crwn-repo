import React, { Component } from "react";

import "./sign-in-and-sign-out.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignOut = () => (
  <div className="sign-in-and-sign-out">
    <SignIn />
  </div>
);

export default SignInAndSignOut;
