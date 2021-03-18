import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="first_name"
              type="text"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.first_name}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="last_name"
              type="text"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.last_name}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              type="number"
              placeholder="Phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="dark" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddContact;
