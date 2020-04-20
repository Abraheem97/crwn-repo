import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import CustomButton from "../custom-button/custom-button.component";
class SignUp extends React.Component {
  state = { username: "", email: "", password: "", password_confirmation: "" };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, password_confirmation } = this.state;

    if (password !== password_confirmation) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { username });
      this.setState({
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Create a new account with an email address</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display name"
            type="text"
            name="username"
            value={this.state.username}
            handleChange={this.handleInput}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleInput}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleInput}
          />
          <FormInput
            label="Password Confirmation"
            type="password"
            name="password_confirmation"
            value={this.state.password_confirmation}
            handleChange={this.handleInput}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
