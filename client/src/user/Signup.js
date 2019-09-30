import React, { Component } from "react";
import { API } from "../config";
import image from "../image/authentication.svg";
import "../style/signup.css";
import { Form, FormGroup, Alert, Label, Button } from "reactstrap";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  };
  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
      error: false
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // const { email, password } = this.state;
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <div className="loginDiv">
          <div className="row">
            <div className="col-md-6 limit">
              <img src={image} alt="" />
            </div>
            <div className="col-md-6">
              <div className="auth__auth">
                <h1 className="auth__title">Access your account</h1>
                <p style={{ textAlign: "center" }}>
                  Fill in your email and password to proceed
                </p>
                {this.state.error ? (
                  <Alert color="danger">{this.state.error} </Alert>
                ) : null}
                <Form className="form" onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Label>Name</Label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      className="loginInput"
                      placeholder="shubham"
                      onChange={this.onChange}
                    />
                    <Label>Email</Label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="loginInput"
                      placeholder="xyz@example.com"
                      onChange={this.onChange}
                    />

                    <Label>Password</Label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="loginInput"
                      onChange={this.onChange}
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    />
                    <Button
                      type="submit"
                      onClick={this.toggle}
                      className="button button__accent"
                    >
                      Log in
                    </Button>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
