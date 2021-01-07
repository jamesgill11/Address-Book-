import React, { Component } from "react";
import { Header } from "./Components/Header";
import Container from "react-bootstrap/Container";
import AddressList from "./Components/AddressList";

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <AddressList />
      </Container>
    );
  }
}

export default App;
