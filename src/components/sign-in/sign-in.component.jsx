import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends Component {
  state = { email: "", password: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        {" "}
        <h2 className="title">I already have an account </h2>
        <span> Sign in with your email and passsword</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleInput}
          />

          <FormInput
            required
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleInput}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in </CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
