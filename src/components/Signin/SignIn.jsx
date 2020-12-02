import React from "react";
import "./SignIn.scss";
import FormInput from '../../components/FormInput/FormInput'
import CustomButton from '../../components/CustomButton/CustomButton'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handaleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />
          
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handaleChange={this.handleChange}
            label="Passowrd"
            required
          />
          
          <CustomButton type="submit" >Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
