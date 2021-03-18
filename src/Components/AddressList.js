import React, { Component } from "react";
import AddContact from "./AddContact";
import Container from "react-bootstrap/Container";
import SearchContact from "./SearchContact";
import * as api from "../utlis/api";
import {
  Button,
  Card,
  CardDeck,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

class AddressList extends Component {
  state = {
    contacts: [],
    search: "",
    showForm: false,
  };
  componentDidMount() {
    api.getContacts().then((contacts) => {
      this.setState({ contacts });
    });
  }

  addContact = (newContact) => {
    const { id, first_name, last_name, phone, email } = newContact;
    api.postContact(id, first_name, last_name, phone, email).then((contact) => {
      this.setState({
        contacts: [...this.state.contacts, contact],
      });
    });
  };

  delContact = (id) => {
    api.delContact(id).then(() => {
      this.setState({
        contacts: [
          ...this.state.contacts.filter((contact) => contact.id !== id),
        ],
      });
    });
  };

  render() {
    const { contacts, search, showForm } = this.state;

    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <SearchContact
              handleChange={(e) => this.setState({ search: e.target.value })}
            />
            <Button
              onClick={() => this.setState({ showForm: !this.state.showForm })}
              variant="dark"
              style={{ marginLeft: "3px", height: "30px" }}
            >
              {showForm ? "Hide form" : "Add Contact"}
            </Button>
          </Row>
          <Row className="justify-content-center">
            <Row>{showForm && <AddContact onSubmit={this.addContact} />}</Row>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center">
            {contacts
              .filter((contact) => {
                return contact.first_name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })

              .map((contact) => {
                return (
                  <CardDeck key={contact.id}>
                    <Col>
                      <Card
                        style={{
                          margin: "5px",
                          minWidth: "18rem",
                        }}
                      >
                        <Card.Body>
                          <Card.Title>
                            {contact.first_name} {contact.last_name}
                          </Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem>{contact.phone}</ListGroupItem>
                          <ListGroupItem>{contact.email}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                          <Button
                            variant="outline-danger"
                            onClick={this.delContact.bind(this, contact.id)}
                          >
                            Delete Contact
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </CardDeck>
                );
              })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddressList;
