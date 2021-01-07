import React, { Component } from "react";
import AddContact from "./AddContact";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import SearchContact from "./SearchContact";
import styled from "styled-components";

const Styles = styled.div`
  .btnStyle {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  }
  `;

class AddressList extends Component {
  state = {
    contacts: [
      {
        id: Math.random() * 1000,
        first_name: "David",
        last_name: "Platt",
        phone: "01913478234",
        email: "david.platt@corrie.co.uk",
      },
      {
        id: Math.random() * 1000,
        first_name: "Jason",
        last_name: "Grimshaw",
        phone: "01913478123",
        email: "jason.grimshaw@corrie.co.uk",
      },
      {
        id: Math.random() * 1000,
        first_name: "Ken",
        last_name: "Barlow",
        phone: "019134784929",
        email: "ken.barlow@corrie.co.uk",
      },
      {
        id: Math.random() * 1000,
        first_name: "Rita",
        last_name: "Sullivan",
        phone: "01913478555",
        email: "rita.sullivan@corrie.co.uk",
      },
      {
        id: Math.random() * 1000,
        first_name: "Steve",
        last_name: "McDonald",
        phone: "01913478555",
        email: "steve.mcdonald@corrie.co.uk",
      },
    ],
    search: "",
  };

  addTodo = (newContact) => {
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  delTodo = (id) => {
    this.setState({
      contacts: [...this.state.contacts.filter((contact) => contact.id !== id)],
    });
  };
  render() {
    const { contacts, search } = this.state;

    return (
      <Styles>
        <Container>
          <SearchContact
            handleChange={(e) => this.setState({ search: e.target.value })}
          />
          <Table responsive="lg">
            <thead key={contacts.id}>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            {contacts
              .filter((contact) => {
                return contact.first_name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((contact) => {
                return (
                  <tbody key={contact.id}>
                    <tr>
                      <td key={contact.first_name}>{contact.first_name}</td>
                      <td key={contact.last_name}>{contact.last_name}</td>
                      <td key={contact.phone}>{contact.phone}</td>
                      <td key={contact.email}>{contact.email}</td>
                      <td>
                        {" "}
                        <button
                          className="btnStyle"
                          onClick={this.delTodo.bind(this, contact.id)}
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </Table>
          <AddContact onSubmit={this.addTodo} />
        </Container>
      </Styles>
    );
  }
}

export default AddressList;
