import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
class SignUp extends React.Component {
  state = { username: "", email: "", password: "", password_confirmation: "" };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Create a new account with an email address</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Username"
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
        </form>
      </div>
    );
  }
}

export default SignUp;
