import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .form {
    width: 30%;
    margin: 0 auto;
  }
`;

class AddContact extends Component {
  state = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: Math.random() * 1000,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone: this.state.phone,
      email: this.state.email,
    });
    this.setState({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
    });
  };
  render() {
    return (
      <Form>
        <form className="form" onSubmit={this.handleSubmit}>
          First Name:{" "}
          <input
            className="field"
            name="first_name"
            value={this.state.first_name}
            onChange={this.handleChange}
            placeholder="first name"
          />
          Last Name:{" "}
          <input
            className="field"
            name="last_name"
            value={this.state.last_name}
            onChange={this.handleChange}
            placeholder="last name"
          />
          <br />
          Phone Num.:{" "}
          <input
            className="field"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="phone"
          />
          Email:{" "}
          <input
            className="field"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <hr />
          <button onClick={this.handleSubmit}>Add Contact</button>
        </form>
      </Form>
    );
  }
}

export default AddContact;
